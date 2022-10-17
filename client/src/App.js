import React from 'react'
import Signup from "./Components/Signup";
import Login from './Components/Login';
import { Route ,Routes } from 'react-router-dom';
import Marketplace from './Components/Marketplace';
import Navbar from './Components/Navbar';
const App = () => {
  return (
    <>
      <div className="container p-5">
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Home/>} /> */}
          <Route path='/api/signup' exact element={<Signup/>} />
          <Route path='/api/login' exact element={<Login/>} />
          <Route path='/api/primary-market' exact element={<Marketplace/>} />
        </Routes>
      </div>
    </>
  )
}

export default App