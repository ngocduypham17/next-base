import React from 'react'
import { Container } from './styles'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import data from '../../utils/sample-data'
import { getImageUrl } from '../../utils/getMockImage'

interface IPosts {
  route?: string
}

const Posts = ({ route }: IPosts) => {
  return (
    <Container>
      <Box display="flex" gap="10px" marginBottom="30px">
        {['All', 'Question', 'Post'].map((item) => (
          <Button className="filter-button" key={item}>
            {item}
          </Button>
        ))}
      </Box>
      <Box className="blogs">
        {data.map((blog) => (
          <Box key={blog.id} className="blog-item">
            <Box className="header">
              <Box display="flex" gap="10px">
                <Image
                  src={getImageUrl(blog)}
                  width="20px"
                  height="20px"
                  alt=""
                />
                <Text as="span">{blog.title}</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Text as="span" fontSize="14">
                  {blog.created_at}
                </Text>
                <Box
                  width="5px"
                  height="5px"
                  borderRadius="5px"
                  background="orange.400"
                />
              </Box>
            </Box>
            <Text className="title">{blog.title}</Text>
            <Box className="content">
              {blog.isImageAvailable && (
                <Image marginRight="5px" src={getImageUrl(blog)} />
              )}
              <Text>{blog.content}</Text>
            </Box>
            <Text
              marginBottom="10px"
              fontSize="15px"
              fontWeight="00"
              textTransform="uppercase"
              color="lightgrey"
            >
              {blog.title} . 17 MIN READ
            </Text>
            {route === '/post' && (
              <Box display="flex" justifyContent="space-between">
                <Button className="preview">Preview</Button>
                <Button className="decline">Decline</Button>
                <Button className="approve">Approve</Button>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Posts
