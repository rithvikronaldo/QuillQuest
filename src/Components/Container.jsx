import { Box, Center } from '@chakra-ui/react'
import React from 'react'

const Container = () => {
  return (  
      <Center h="100vh">
        <Box p="4" borderWidth="150px" height={'670px'} borderRadius="md" bg={'gray.200'} marginTop={-50} marginLeft={20}>
          <h1>Your Content Goes Here</h1>
          <p>Any additional content you want to display.</p>
        </Box>
      </Center>
  )
}

export default Container