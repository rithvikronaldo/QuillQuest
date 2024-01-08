import React from "react";
import { Flex, Box, Image, Input, InputGroup, InputRightElement, Avatar, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      bg="white"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" // Shadow effect
    >
      {/* Logo */}
      <Image src="todolist/public/book.png" alt="Logo" w="100px" h="auto" />

      {/* Search Bar */}
      <Center>
      <Box flex="1" ml={4}>
        <InputGroup maxW="280px">
          <Input
            placeholder="Search..."
            size="100px" // Adjust the size of the search bar
            height="36px" // Adjust the height of the search bar
            px={5} 
            variant='filled'// Adjust the padding of the search bar
          />
          <InputRightElement>
            {/* You can customize the search icon here */}
            <Box as="span" fontSize="lg" pr={2}>
              🔍
            </Box>
          </InputRightElement>
        </InputGroup>
      </Box>
      </Center>

      {/* Avatar */}
      <Avatar src="/path/to/your/avatar.jpg" size="md" />
    </Flex>
  );
};

export default Header;
