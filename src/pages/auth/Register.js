import React, { useState } from 'react'
import Link from 'next/link'
import { register, uploadAvatar } from '../../../firebase'

import { HiLockClosed } from "react-icons/hi"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { IoImage, IoPersonCircle } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

import {
    Grid,
    Box,
    Input,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    Button,
    Text,
    Icon,
    useToast,
    ChakraProvider,
} from '@chakra-ui/react'
import { Colors } from 'colors'
import styles from '@/styles/Auth.module.css'
import { rubik_semibold, lato } from '../../../fonts'

function Register() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const toast =  useToast()

    const [user, setUser] = useState({
       username: "",
       password: "",
       email: "",
    })

    const [imageUpload, setImageUpload] = useState(null)

    const handleSubmit = () => {
        if (user.username || user.email || user.password || imageUpload) {
            uploadAvatar(imageUpload, user.email)
            register(user.username, user.email, user.password)
            .then(
                toast({
                    title: "Success!",
                    description: `Account created for ${user.username}`,
                    status: "success",
                    variant: "subtle",
                    duration: 3500,
                    isClosable: true,
                })
            )
            .catch((err) => {toast({
                title: "Error!",
                description: `${err.message}`,
                status: "error",
                variant: "subtle",
                duration: 4000,
                isClosable: true,
            })})
        } else {
            toast({
                title: "Warning",
                description: "All fields are required to be filled.",
                status: "warning",
                variant: "subtle",
                isClosable: true,
                duration: 3000
            })
        }
    }


    return (
        <ChakraProvider>
            <Box className={styles.container}>
                <div className={styles.bubbles}>
                    <span style={{ "--i": 11 }}></span>
                    <span style={{ "--i": 12 }}></span>
                    <span style={{ "--i": 24 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 20 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 21 }}></span>
                    <span style={{ "--i": 15 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 26 }}></span>
                    <span style={{ "--i": 17 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 28 }}></span>
                    <span style={{ "--i": 11 }}></span>
                    <span style={{ "--i": 12 }}></span>
                    <span style={{ "--i": 24 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 20 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 21 }}></span>
                    <span style={{ "--i": 15 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 26 }}></span>
                    <span style={{ "--i": 17 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 28 }}></span> 
                </div>
                <Grid justifyContent="center" alignItems="center">
                    <Box className={styles.form}>

                        <Text marginTop={4} fontFamily={rubik_semibold.style.fontFamily} className={styles.title}>Register</Text>
                        <InputGroup marginTop={10} marginBottom={10}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={IoPersonCircle} boxSize={6} color="white" />
                            </InputLeftElement>
                            <Input
                                className={styles.input}
                                variant='flushed'
                                placeholder='Username'
                                focusBorderColor={Colors.CYAN}
                                onChange={
                                    (e) => setUser(prev => ({...prev, username: e.target.value}))
                                }
                            />
                        </InputGroup>
                        <InputGroup marginTop={10} marginBottom={10}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={MdEmail} boxSize={6} color="white" />
                            </InputLeftElement>
                            <Input
                                className={styles.input}
                                variant='flushed'
                                placeholder='Email'
                                focusBorderColor={Colors.CYAN}
                                onChange={
                                    (e) => setUser(prev => ({...prev, email: e.target.value}))
                                }
                            />
                        </InputGroup>
                        <InputGroup marginTop={10} marginBottom={10}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={HiLockClosed} boxSize={6} color="white" />
                            </InputLeftElement>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                variant='flushed'
                                className={styles.input}
                                focusBorderColor={Colors.CYAN}
                                onChange={
                                    (e) => setUser(prev => ({...prev, password: e.target.value}))
                                }
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' variant='unstyled' onClick={handleClick}>
                                    {show ? <Icon as={AiFillEyeInvisible} boxSize={5} color="white" /> : <Icon as={AiFillEye} boxSize={5} color="white" />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <InputGroup marginTop={10} marginBottom={10}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={IoImage} boxSize={6} color="white" />
                            </InputLeftElement>
                            <Input
                                pr='4.5rem'
                                type='file'
                                placeholder='Image'
                                variant='flushed'
                                className={styles.input}
                                focusBorderColor={Colors.CYAN}
                                onChange={
                                    (e) => setImageUpload(e.target.files[0])
                                }
                            />
                        </InputGroup>
                        <Button
                            fontFamily={lato.style.fontFamily}
                            variant="outline"
                            color="#45f3ff"
                            textTransform="uppercase"
                            borderColor="#45f3ff"
                            boxShadow="0 0 5px #45f3ff"
                            marginBottom={5}
                            width="100%"
                            onClick={handleSubmit}
                            _hover={{ boxShadow: '0 0 10px #45f3ff', bgColor: '#45f3ff44' }}
                        >
                            Register
                        </Button>
                        <Text color="gray.500" textAlign="center" padding={5}>
                            Already have an account?&nbsp;
                            <Link href='/auth/Login' className={styles.link}>
                                Login
                            </Link>
                        </Text>
                    </Box>
                </Grid>
            </Box>
        </ChakraProvider>
    )
}

export default Register