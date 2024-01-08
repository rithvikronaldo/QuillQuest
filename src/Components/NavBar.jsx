import React from "react";
import { Flex, VStack, Box, Link as ChakraLink, Text, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaUserGroup } from "react-icons/fa6";
import { MdForum } from "react-icons/md";
import { GiAbstract050 } from "react-icons/gi";

// Extend Chakra UI theme to customize link styles
const theme = extendTheme({
  components: {
    Flex: {
      baseStyle: {
        _hover: {
          background: "rgba(0, 0, 255, 0.1)", // Hover effect for the entire Flex container
          borderRadius: "8px",
          width: "150%", // Rounded edges on hover
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          color: "gray.500",
          textDecoration: "underline",
        },
      },
    },
  },
});

const NavigationBar = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" p="4" bg="gray.100" color="gray.500" h="100vh" className="navbar">
        <Text fontSize="xl" fontWeight="bold" mb="4" fontFamily="monospace">
          Hello RITHVIK
        </Text>
        <VStack spacing="4">
          <Box>
            <Flex align="center" _hover={{ background: "rgba(0, 0, 255, 0.1)", borderRadius: "8px" }}>
              <ChakraLink href="#" fontSize="lg" fontWeight="bold" paddingRight={4}>
                Clubs
              </ChakraLink>
              <FaUserGroup />
            </Flex>
          </Box>
          <Box>
            <Flex align="center" _hover={{ background: "rgba(0, 0, 255, 0.1)", borderRadius: "8px" }}>
              <ChakraLink href="#" fontSize="lg" fontWeight="bold" paddingRight={3}>
                Forums
              </ChakraLink>
              <MdForum />
            </Flex>
          </Box>
          <Box>
            <Flex align="center" _hover={{ background: "rgba(0, 0, 255, 0.1)", borderRadius: "8px" }}>
              <ChakraLink href="#" fontSize="lg" fontWeight="bold" paddingRight={2}>
                Categories
              </ChakraLink>
              <GiAbstract050 />
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};

export default NavigationBar;
