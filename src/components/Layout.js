import { ChakraProvider, Box } from '@chakra-ui/react'
import Navbar from './Navbar'

export default function Layout({children}) {
    return (
        <ChakraProvider>
            <Navbar />
            <Box bgColor="#001623" minHeight="100vh">
                {children}
            </Box>
        </ChakraProvider>
    )
}