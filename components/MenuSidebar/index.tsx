import React from 'react'

import { Box, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCompass } from '@fortawesome/free-regular-svg-icons'
import { faGhost, faNewspaper } from '@fortawesome/free-solid-svg-icons'

import { SideBarContainer } from './styles'
import { useRouter } from 'next/navigation'

const MenuSideBar = () => {
  const router = useRouter()
  return (
    <SideBarContainer>
      <Box className="header">
        <img src="https://hblab.vn/wp-content/uploads/2020/05/logo.png" />
      </Box>
      <Box className="items">
        {[
          {
            name: 'All Posts',
            path: '/posts',
            icon: <FontAwesomeIcon icon={faNewspaper} />,
          },
          {
            name: 'Activities',
            path: '/activities',
            icon: <FontAwesomeIcon icon={faBell} />,
          },
          {
            name: 'My Posts',
            path: '/my-posts',
            icon: <FontAwesomeIcon icon={faCompass} />,
          },
          {
            name: 'Profile',
            path: '/profile',
            icon: <FontAwesomeIcon icon={faGhost} />,
          },
        ].map((item) => (
          <Box
            key={item.name}
            onClick={() => router.push(item.path)}
            className="item"
          >
            {item.icon}&emsp;{item.name}
          </Box>
        ))}
      </Box>
      <Button className="add-post">New Post</Button>
    </SideBarContainer>
  )
}

export default MenuSideBar
