import { ChakraProvider } from '@chakra-ui/react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { config } from '@fortawesome/fontawesome-svg-core'

import GlobalStyles from '../styles/global'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/router'
import MainLayout from '../components/MainLayout'
config.autoAddCss = false

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter()

  const isLayoutRoute = router.pathname === '/login'

  if (isLayoutRoute) {
    return (
      <GoogleOAuthProvider clientId="56890653875-vfhchf88ra1edgnkva2nmov7u4hhs9mv.apps.googleusercontent.com">
        <ChakraProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </ChakraProvider>
      </GoogleOAuthProvider>
    )
  } else
    return (
      <GoogleOAuthProvider clientId="56890653875-vfhchf88ra1edgnkva2nmov7u4hhs9mv.apps.googleusercontent.com">
        <ChakraProvider>
          <GlobalStyles />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </GoogleOAuthProvider>
    )
}
