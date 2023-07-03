import React from 'react';
import "./app.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <Box width='400px' sx={{width:{x1:'1488px'}}} m="auto">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer/>
    </Box>
  )
}

export default App