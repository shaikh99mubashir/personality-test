import React from 'react'
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom'
import Login from '../Screens/Login'
import Home from '../Screens/Home'
const Routing = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='Home' element={<Home />} />
            </Routes>
        </BrowserRouter>
  )
}

export default Routing