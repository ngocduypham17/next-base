import styled from 'styled-components'
import { Box, Button } from '@chakra-ui/react'
 
export const StyledBox = styled(Box)`
  border: 1px solid #2196f3;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 15vh;
  height: 45vh;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  box-shadow: 0px 0px 10px 0px rgba(33,150,243,0.94);
;
`

export const StyledButton = styled(Button)`
  background-color: white;
  color: #2d3748;
  border: 1px solid #2d3748;
  height: 55px;
  width: 70%;
  border-radius: 8px;
  font-size: 18px;
  font-family: monospace;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    background-color: #46acff;
    transition: 0.5s;
    color: whitesmoke;
    border-color: whitesmoke;
  }
`

export const StyledImage = styled.img`
  width: 70%;
  object-fit: contain;
`