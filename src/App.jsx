import React from 'react';
import Navbar from './components/navbar/navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Coin from './pages/Coin/Coin.jsx';
import Footer from './components/footer/footer.jsx';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
