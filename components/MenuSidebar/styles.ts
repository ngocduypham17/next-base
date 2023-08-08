import styled from 'styled-components'
import { Box, Button } from '@chakra-ui/react'
import {
  BORDER_COLOR,
  GRAY_COLOR,
  ORANGE_PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../styles/colors'

export const SideBarContainer = styled(Box)`
  width: 300px;
  border-right: 1px solid ${BORDER_COLOR};

  .header {
    height: 75px;
    display: flex;
    align-items: center;
    padding-left: 30%;
    border-bottom: 1px solid ${BORDER_COLOR};

    img {
      width: 55%;
    }
  }

  .items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin: 45px auto;
    padding-left: 25px;
    cursor: pointer;
  }

  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 160px;
    height: 45px;
    padding-left: 25px;
    &:hover {
      background-color: ${GRAY_COLOR};
      border-radius: 25px;
      transition: all 0.15s;
    }
  }

  .add-post {
    background-color: ${ORANGE_PRIMARY_COLOR};
    height: 45px;
    width: 130px;
    border-radius: 33px;
    border: none;
    margin-left: 45px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${WHITE_COLOR};
    cursor: pointer;

    &:hover {
      background-color: #b53d00;
      transition: 0.3s;
    }
  }
`
