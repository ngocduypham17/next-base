import React from 'react'

import { deleteCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faFaceGrin,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'

import { MenuHeaderContainer } from './styles'
import { ACCESS_TOKEN } from '../../constants/global'

const MenuHeader = () => {
  const router = useRouter()

  const handleSignOut = () => {
    deleteCookie(ACCESS_TOKEN)
    router.push('/login')
  }

  return (
    <MenuHeaderContainer>
      <Text>Pending Posts</Text>
      <Box className="right-header">
        <InputGroup>
          <InputLeftElement className="input-icon" pointerEvents="none">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </InputLeftElement>
          <Input type="tel" placeholder="Search..." />
        </InputGroup>
        <Menu direction="rtl">
          <MenuButton as={Box}>
            <Box className="header-setting">
              <FontAwesomeIcon icon={faBars} />
              <FontAwesomeIcon icon={faFaceGrin} />
            </Box>
          </MenuButton>
          <MenuList className="menu-list">
            <MenuItem
              className="menu-item"
              onClick={() => router.push('/profile')}
            >
              Profile
            </MenuItem>
            <MenuDivider className="margin-none" />
            <MenuItem onClick={() => handleSignOut()} className="menu-item">
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </MenuHeaderContainer>
  )
}

export default MenuHeader
