import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import Context, { logincontext } from './context/Context';
import axios from 'axios';
import { useEffect } from 'react';
import Details from './ItemDetails/Details';
import Cartitem from './Components/Cartpage/Cartitem';
import Final from './Components/Final';
import Final1 from './Components/Final1';
import Orders from './Components/Orders';
function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/getallcart/:id" element={<Cartitem />} />
            <Route exact path="/product/:id/" element={<Details/>} />
            <Route exact path='/final' element={<Final/>}></Route>
            <Route exact path='/final1/:id/' element={<Final1/>}></Route>
            <Route exact path='/orders/:id/' element={<Orders/>}></Route>
          </Routes>
        </BrowserRouter>
        </Context>
    </>
  );
}
export default App;