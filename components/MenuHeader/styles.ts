import styled from 'styled-components'
import { Box } from '@chakra-ui/react'
import {
  BORDER_COLOR,
  GRAY_COLOR,
  LOGIN_FORM_COLOR_PRIMARY,
  ORANGE_PRIMARY_COLOR,
  TEXT_COLOR_PRIMARY,
  WHITE_COLOR,
} from '../../styles/colors'

export const MenuHeaderContainer = styled(Box)`
  height: 75px;
  width: calc(100% - 30px);
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${BORDER_COLOR};

  p {
    width: fit-content;
    color: ${ORANGE_PRIMARY_COLOR};
    font-size: 28px;
    font-weight: normal;
  }

  .right-header {
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 30px;
    min-width: 200px;

    input {
      height: 40px;
      width: 160px;
      border-radius: 20px;
      outline: none;
      border: none;
      background-color: ${GRAY_COLOR};
      box-shadow: none;
      margin-right: 15px;
      transition: 0.3s;
    }

    input:focus-visible {
      outline: none;
      border: none;
      width: 320px;
      box-shadow: 0 0 2px 0px ${LOGIN_FORM_COLOR_PRIMARY};
      transition: 0.3s;
    }

    /* input:focus-within {
      outline: none;
      border: none;
      width: 160px;
      box-shadow: none;
      transition: 0.3s;
    } */

    input::placeholder {
      font-family: inherit;
      font-size: 14px;
    }

    .chakra-input__left-element {
      scale: 1.25;
    }

    .header-setting {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      height: 40px;
      width: 70px;
      border-radius: 20px;
      background-color: ${GRAY_COLOR};
      cursor: pointer;
    }

    .header-popup {
      box-shadow: 0px 0px 20px 0px ${TEXT_COLOR_PRIMARY};
      width: 150px;
      height: 80px;
      border-radius: 20px;
    }

    .chakra-menu__menu-button {
      cursor: pointer;
    }

    .menu-item {
      background-color: ${WHITE_COLOR};
      font-family: inherit;
      border: none;
      padding: 10px;
      font-size: 16px;
      color: ${TEXT_COLOR_PRIMARY};
      cursor: pointer;

      &:hover {
        background-color: ${ORANGE_PRIMARY_COLOR};
        color: ${WHITE_COLOR};
        transition: 0.3s;
      }
    }

    .menu-list {
      border-radius: 10px;
      overflow: hidden;
      min-width: 120px;
      box-shadow: 0 0 10px 0 lightgrey;
    }

    .margin-none {
      margin: 0px;
    }
  }
`
