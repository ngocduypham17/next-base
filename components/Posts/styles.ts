import { Box } from '@chakra-ui/react'
import styled from 'styled-components'
import {
  BORDER_COLOR,
  COLOR_APPROVED,
  COLOR_DECLINE,
  GRAY_COLOR,
  LOGIN_FORM_COLOR_PRIMARY,
  ORANGE_PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../styles/colors'

export const Container = styled(Box)`
  width: 600px;

  .filter-button {
    height: 45px;
    width: 90px;
    border-radius: 30px;
    background-color: ${GRAY_COLOR};
    font-weight: normal;

    &:hover {
      background-color: ${LOGIN_FORM_COLOR_PRIMARY};
      transition: 0.3s;
      color: ${WHITE_COLOR};
    }
  }

  .blogs {
    width: 650px;
    height: calc(100vh - 200px);
    overflow-y: scroll;
  }

  .blogs::-webkit-scrollbar {
    display: none;
  }

  .blog-item {
    width: 600px;
    height: 275px;
    border-bottom: 1px solid ${BORDER_COLOR};
    padding: 20px 0;

    &:hover {
      background-color: #f9f9f9;
      transition: 0.3s;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-weight: bolder;
    font-size: 18px;
    margin-top: 10px;
  }

  .content {
    height: 30%;
    overflow: hidden;
    margin: 10px 0 15px;
    display: flex;
  }

  button {
    cursor: pointer;
    width: 150px;
    height: 45px;
    border-radius: 40px;
    background-color: ${WHITE_COLOR};
    font-weight: normal;
    border: none;

    &:hover {
      color: ${WHITE_COLOR};
    }
  }

  .preview {
    border: 1px solid ${ORANGE_PRIMARY_COLOR};
    color: ${ORANGE_PRIMARY_COLOR};

    &:hover {
      background-color: ${ORANGE_PRIMARY_COLOR};
    }
  }

  .decline {
    border: 1px solid ${COLOR_DECLINE};
    color: ${COLOR_DECLINE};

    &:hover {
      background-color: ${COLOR_DECLINE};
    }
  }

  .approve {
    border: 1px solid ${COLOR_APPROVED};
    color: ${COLOR_APPROVED};

    &:hover {
      background-color: ${COLOR_APPROVED};
    }
  }
`
