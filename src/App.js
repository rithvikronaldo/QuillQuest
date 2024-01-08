import React from 'react';
import './App.css';
import { Flex } from '@chakra-ui/react';
import Header from './Components/Header';
import NavigationBar from './Components/NavBar';
import Container from './Components/Container';

function App() {
  return (
    <Flex direction={'column'}>
      <Header/>
      <Flex direction="row" flex="1">
        <NavigationBar/>
        <Container />
      </Flex>
    </Flex>
  );
}

export default App;
