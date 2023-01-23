import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
