import Box from "@material-ui/core/Box"
import React from 'react';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './mock';
import GuestRoute from './routes/GuestRoute';


function App() {

  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1>não encontrou nada kk 404! </h1>} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
  
  
}

export default App;
