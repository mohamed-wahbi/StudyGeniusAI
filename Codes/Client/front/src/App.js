import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login.js';

const App = () => {
  return (
    <div className='home'>
      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>



      
    </div>
  )
}

export default App
