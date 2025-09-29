import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

//  Pages
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import About from './pages/About'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product-details/:id' element={<ProductDetail />} />

      </Routes>
    </div>
  )
}

export default App
