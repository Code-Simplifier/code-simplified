import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, updateMetadata } from 'firebase/storage'
import { v4 } from 'uuid'

import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig)  
const storage = getStorage(app)
const googleProvider = new GoogleAuthProvider()


export const auth = getAuth(app)
export const db = getFirestore(app)

export const uploadAvatar = async (url, email) => {
  const avatarRef = ref(storage, `users_avatar/${url.name + v4()}`)
  await uploadBytes(avatarRef, url)
  .then( async (metadata) => {
    await updateMetadata(avatarRef, { customMetadata: { "id": `${email}` } }).catch((err) => console.log(err))
  }).catch((err) => console.log(err))
}


export const addUserToDb = async (
  username, 
  email, 
  plan, 
  id, 
  provider,
  createdAt,
  lastLogin,  
) => {
  await setDoc(doc(db, "users", id), {
    username: username,
    email: email,
    plan: plan,
    provider: provider,
    createdAt: createdAt,
    lastLogin: lastLogin,
  })
}

export const loginWithEmail = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
}


export const loginWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider).then( async (res) => {
    await addUserToDb(
      res.user.displayName,
      res.user.email,
      "free",
      res.user.uid,
      res.user.providerData[0].providerId,
      res.user.metadata.creationTime,
      res.user.metadata.lastSignInTime
    )
  })
}

export const register = async (username, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password).then( async (res) => {
    await updateProfile(res.user, {
      displayName: username
    })
    await addUserToDb(
      res.user.displayName,
      res.user.email,
      "free",
      res.user.uid,
      res.user.providerData[0].providerId,
      res.user.metadata.creationTime,
      res.user.metadata.lastSignInTime
    )
  })
}
