import React from 'react';
import './App.css';
import { Flex } from '@chakra-ui/react';
import Container from './Components/Container';
import NavBar from './Components/NavBar';
import Sidebar from './Components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import axios from 'axios';

// Import BrowserRouter

axios.defaults.baseURL = 'https://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <Router>
      {/* Wrap the entire application with the Router */}
      <>
        <Flex direction={'column'}>
          <NavBar />
          {/* <Sidebar /> */}
        </Flex>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
