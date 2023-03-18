import './App.css';

import Navbar from './compnents/Navbar';
import CardList from './compnents/CardList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductDetail from './compnents/ProductDetials';
import { useSelector, useDispatch } from 'react-redux';
import { totalAmount } from './Feature/Cart';
import { useEffect } from 'react';


function App() {

  const { ADD_Details } = useSelector((store) => store.cart);
  const Dispatch = useDispatch();


  useEffect(() => {
    Dispatch(totalAmount())
  }, [ADD_Details])



  return (






    <>


      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<CardList />} />

          <Route path="/products/:productId" element={<ProductDetail />} />


        </Routes>

      </BrowserRouter>


    </>);
}

export default App;
