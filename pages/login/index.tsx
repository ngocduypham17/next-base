import { useMutation, gql } from '@apollo/client';
import { StyledBox, StyledButton, StyledImage } from './styles';

const LOGIN_MUTATION = gql`
  mutation LoginMutation {
    loginWithGoogle {
      token
      user {
        id
        name
        email
      }
    }
  }
`

const Login = () => {
  //   const [loginWithGoogle, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async () => {
    // try {
    //   const { data } = await loginWithGoogle();
    //   localStorage.setItem("token", data.loginWithGoogle.token);
    //   localStorage.setItem("user", JSON.stringify(data.loginWithGoogle.user));
    // } catch (e) {
    //   console.log(e);
    // }
  }

  return (
    <StyledBox>
      <StyledImage
        src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
        alt="Google logo"
      />
      <StyledButton onClick={handleLogin} isLoading={false}>
        Login with Google account
      </StyledButton>
      {/* {error && <p>{error.message}</p>} */}
    </StyledBox>
  )
}

export default Login;
