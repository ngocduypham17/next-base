import React, { memo, useEffect } from 'react'

import Head from 'next/head'
import { Box } from '@chakra-ui/react'

import MenuHeader from '../MenuHeader'
import MenuSideBar from '../MenuSidebar'
import { ContentsContainer } from '../Contents/styles'

const MainLayout = ({ children, title = 'Have u dated a serial cheaters' }) => {
  React.useEffect(() => {
    console.log('render')
  })

  return (
    <Box display={'flex'} height={'100vh'} width={'100%'}>
      <Head>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="title" content="blog nhóm 1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="use-credentials"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
      </Head>
      <MenuSideBar />
      <Box width={'100%'}>
        <MenuHeader />
        <ContentsContainer>{children}</ContentsContainer>
      </Box>
    </Box>
  )
}

export default memo(MainLayout)
