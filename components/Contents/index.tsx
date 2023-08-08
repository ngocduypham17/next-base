import React from 'react'

import { ContentsContainer } from './styles'

interface IContent {
  children: React.ReactNode
}

const Contents = ({ children }: IContent) => {
  return <ContentsContainer>{children}</ContentsContainer>
}

export default Contents
