import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { auth } from '../../firebase'

import {
  Box,
  Text,
  HStack,
  Button
} from '@chakra-ui/react'
import { Colors } from '../../colors'
import styles from '@/styles/Navbar.module.css'
import { lato, rubik_semibold } from '../../fonts'



function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged(user => setIsAuthenticated(true))
  }, [])
  
  return (
    <Box bgGradient={`linear(to-tr, ${Colors.BLACK}, ${Colors.BLUE})`}>
      <HStack className={styles.container}>
        <Text fontFamily={rubik_semibold.style.fontFamily} className={styles.navTitle}>Code Simplified</Text>
        <Box>
          <a className={styles.navLink}>Blog</a>
          <a className={styles.navLink}>Trending</a>
          <a className={styles.navLink}>Solutions</a>
          <a className={styles.navLink}>Contact</a>
        </Box>
        <HStack marginRight={4}>
          {
            isAuthenticated ?
            <Link href="#">
              <Button
                fontFamily={lato.style.fontFamily}
                variant="solid"
                color="teal.700"
                bgColor="#45f3ff"
                textTransform="uppercase"
                borderColor="#45f3ff"
                boxShadow="0 0 5px #45f3ff"
                margin={4}
                width="90%"
                _hover={{ boxShadow: '0 0 10px #45f3ff', bgColor: '#45f3ff' }}
              >
                Logout
              </Button>
            </Link> : 
            <Box>
              <Link href="/auth/Login">
                <Button
                  fontFamily={lato.style.fontFamily}
                  variant="solid"
                  color="teal.700"
                  bgColor="#45f3ff"
                  textTransform="uppercase"
                  borderColor="#45f3ff"
                  boxShadow="0 0 5px #45f3ff"
                  margin={4}
                  width="90%"
                  _hover={{ boxShadow: '0 0 10px #45f3ff', bgColor: '#45f3ff' }}
                >
                  Login
                </Button>
              </Link>
              <Link href="/auth/Register">
                <Button
                  fontFamily={lato.style.fontFamily}
                  variant="solid"
                  color="teal.700"
                  bgColor="#45f3ff"
                  textTransform="uppercase"
                  borderColor="#45f3ff"
                  boxShadow="0 0 5px #45f3ff"
                  margin={4}
                  width="90%"
                  _hover={{ boxShadow: '0 0 10px #45f3ff', bgColor: '#45f3ff' }}
                >Register</Button>
              </Link>
            </Box>
          }
        </HStack>
      </HStack>
    </Box>
  )
}

export default Navbar