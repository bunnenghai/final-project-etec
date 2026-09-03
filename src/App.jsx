import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Slide from './components/Slide'
import Food from './components/Food'
import Drink from './components/Drink'
import About from './components/About'
import Popular from './components/Popular'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import Cart from './components/Cart'
import Contact from './components/Contact'
function App() {
  return (
    <Routes>
      <Route path='/' element={
        <div id='home'>
          <Navbar></Navbar>
          <Slide></Slide>
          <Popular></Popular>
          <Food></Food>
          <Drink></Drink>
          <About></About>
          <Contact></Contact>
          <Routes></Routes>
        </div>}>
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/cartpage' element={<Cart />} />
    </Routes>
  )
}

export default App
