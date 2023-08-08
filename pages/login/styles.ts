import styled from 'styled-components'
import { Box, Button } from '@chakra-ui/react'
import {
  LOGIN_FORM_COLOR_PRIMARY,
  ORANGE_PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../styles/colors'

export const StyledBox = styled(Box)`
  border: 1px solid ${ORANGE_PRIMARY_COLOR};
  width: 400px;
  margin: 0 auto;
  height: 295px;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  box-shadow: 0px 0px 10px 0px ${ORANGE_PRIMARY_COLOR};
  background-color: ${LOGIN_FORM_COLOR_PRIMARY};
  position: absolute;
  top: 10vh;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);

  .header {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-weight: bold;
    font-size: 34px;
    color: ${WHITE_COLOR};
    text-align: center;
    background-color: ${LOGIN_FORM_COLOR_PRIMARY};
  }

  .go-to-the-homepage {
    background-color: ${ORANGE_PRIMARY_COLOR};
    color: ${WHITE_COLOR};
    border-radius: 4px;
    height: 30px;
    text-align: center;
    box-shadow: none;

    &:hover {
      background-color: ${WHITE_COLOR};
      transition: 0.3s;
      color: ${ORANGE_PRIMARY_COLOR};
    }
  }
`

export const StyledButton = styled(Button)`
  background-color: ${WHITE_COLOR};
  color: #2d3748;
  border: 1px solid #2d3748;
  height: 45px;
  width: 60%;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
  margin: 25px auto;
  overflow: hidden;
  padding: 0;

  &:hover {
    background-color: ${ORANGE_PRIMARY_COLOR};
    transition: 0.3s;
    color: whitesmoke;
    border-color: whitesmoke;
  }
`

export const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
`

export const HomePageButton = styled(Button)`
  background-color: ${ORANGE_PRIMARY_COLOR};
  color: ${WHITE_COLOR};
  border-radius: 10px;
  height: 35px;
  text-align: center;
  box-shadow: none;
  border: none;
  padding: 5px 20px;
  margin-top: 15px;
  font-weight: normal;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${WHITE_COLOR};
    transition: 0.3s;
    color: ${ORANGE_PRIMARY_COLOR};
  }
`
export const Container = styled(Box)`
  background-image: url('https://i.pinimg.com/originals/6e/43/e9/6e43e98a13eba825a41c76c4ac2ebbb1.png');
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
