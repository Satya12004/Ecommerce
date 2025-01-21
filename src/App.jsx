import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Coponents/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import { ToastContainer } from 'react-toastify'
import ViewProdct from './Pages/ViewProdct'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/view' element={<ViewProdct/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App
