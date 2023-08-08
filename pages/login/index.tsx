import axios from 'axios'

import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { Box, useToast } from '@chakra-ui/react'
import { useGoogleLogin } from '@react-oauth/google'

import { ACCESS_TOKEN } from '../../constants/global'
import {
  Container,
  HomePageButton,
  StyledBox,
  StyledButton,
  StyledImage,
} from './styles'

const Login = () => {
  const toast = useToast()
  const router = useRouter()

  const showMessage = (res) => {
    toast({
      position: 'bottom',
      title: 'Login successfully!',
      description: `Welcome! ${res.result.name} :D`,
      status: 'success',
      duration: 5000,
      variant: 'left-accent',
      isClosable: true,
    })
  }

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async function (response) {
      router.push('./posts')
      await axios
        .post('http://35.241.66.101//api/v1/login', {
          token: response.access_token,
        })
        .then(async (res) => {
          setCookie(ACCESS_TOKEN, res.data.result.access_token)
          const response = await axios.get(
            'http://35.241.66.101//api/v1/profile',
            {
              headers: {
                Authorization: `Bearer ${res.data.result.access_token}`,
              },
            }
          )
          await showMessage(response.data)
        })
    },
    onError: (res) => console.log(res),
  })

  return (
    <Container>
      <StyledBox>
        <Box className="header">Log In</Box>
        <StyledButton onClick={() => loginWithGoogle()}>
          <Box width="45px" height="45px" overflow="hidden">
            <StyledImage
              src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"
              alt="Google logo"
            />
          </Box>
          <Box margin="auto">Log in using Google</Box>
        </StyledButton>
        <HomePageButton
          onClick={() => {
            window.open('https://hblab.vn', '_blank').focus()
          }}
        >
          Go home page
        </HomePageButton>
      </StyledBox>
    </Container>
  )
}

export default Login
