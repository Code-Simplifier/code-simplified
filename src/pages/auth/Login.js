import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
    loginWithEmail, 
    loginWithGoogle,  
} from '../../../firebase'

import { FaGoogle, FaGithub } from "react-icons/fa"
import { HiLockClosed } from "react-icons/hi"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

import {
    Grid,
    Box,
    Input,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    Button,
    Divider,
    Text,
    Icon,
    useToast,
} from '@chakra-ui/react'
import { Colors } from 'colors'
import styles from '@/styles/Auth.module.css'
import { rubik_semibold, lato, lato_semibold } from '../../../fonts'

function Login() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const toast = useToast()
    const router = useRouter()

    const handleGoogleSubmit = () => {
        try {
            loginWithGoogle().then(
                toast({
                    title: "Success!",
                    description: "Welcome to Code Simplified!",
                    status: "success",
                    variant: "subtle",
                    isClosable: true,
                    duration: 3500,
                })
            )
            router.push("/")
            
        } catch (err) {
            toast({
                title: "Error!",
                description: `${err.message}`,
                status: "error",
                variant: "subtle",
                isClosable: true, 
                duration: 4000,
            })          
        }
    }

    const handleEmailSubmit = () => {
        try {
            loginWithEmail(user.email, user.password).then(
                toast({
                    title: "Success!",
                    description: "Welcome to Code Simplified!",
                    status: "success",
                    variant: "subtle",
                    isClosable: true,
                    duration: 3500,
                })
            )
            router.push("/")
            
        } catch (err) {
            toast({
                title: "Error!",
                description: `${err.message}`,
                status: "error",
                variant: "subtle",
                isClosable: true, 
                duration: 4000,
            })          
        }
    }

    return (
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

                    <Text marginTop={4} fontFamily={rubik_semibold.style.fontFamily} className={styles.title}>Login</Text>
                    <InputGroup marginTop={10} marginBottom={10}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<Icon as={MdEmail} color="white" boxSize={6} />}
                        />
                        <Input
                            className={styles.input}
                            variant='flushed'
                            placeholder='Email'
                            focusBorderColor={Colors.CYAN}
                            onChange={ (e) => setUser((prev) => ({ ...prev, email: e.target.value })) }
                        />
                    </InputGroup>
                    <InputGroup marginTop={10} marginBottom={10}>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Icon as={HiLockClosed} boxSize={6} color="white" />}
                        />
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password'
                            variant='flushed'
                            className={styles.input}
                            focusBorderColor={Colors.CYAN}
                            onChange={ (e) => setUser((prev) => ({ ...prev, password: e.target.value })) }
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='lg' variant='unstyled' onClick={handleClick}>
                                {show ? <Icon as={AiFillEyeInvisible} boxSize={5} color="white" /> : <Icon as={AiFillEye} boxSize={5} color="white" />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        fontFamily={lato.style.fontFamily}
                        variant="solid"
                        color="teal.700"
                        bgColor="#45f3ff"
                        textTransform="uppercase"
                        borderColor="#45f3ff"
                        boxShadow="0 0 5px #45f3ff"
                        marginBottom={5}
                        width="100%"
                        onClick={handleEmailSubmit}
                        _hover={{ boxShadow: '0 0 10px #45f3ff', bgColor: '#45f3ff' }}
                    >
                        Login
                    </Button>
                    <Text color="gray.500" textAlign="center" padding={5}>
                        Don't have an account?&nbsp;
                        <Link href='/auth/Register' className={styles.link}>
                            Register
                        </Link>
                    </Text>
                    <Divider />
                    <Text color="gray.500" textAlign="center" padding={5}>
                        or login using social media
                    </Text>
                    <Button
                        fontFamily={lato_semibold.style.fontFamily}
                        variant="solid"
                        color="white"
                        borderColor="green.300"
                        bgColor="green.300"
                        boxShadow="0 0 5px #68D391"
                        marginBottom={5}
                        onClick={handleGoogleSubmit}
                        width="100%"
                        _hover={{ boxShadow: '0 0 10px #68D391', bgColor: '#68D391' }}
                    >
                        <Icon as={FaGoogle} boxSize={8} color="white" paddingRight={3} />
                        Login with Google
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Login