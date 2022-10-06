import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/index.jsx";
import ErrorPage from "../pages/404/index.jsx";
import CatgoryIndex from "../pages/all/catgory/index.js";
import CartIndex from "../pages/cart/index.js";
import Login from "../components/Login.jsx";
import Checkout from "../components/Checkout.jsx";






const RouterPage = () => {
   
    return (
        <>
            <Routes>
                {/* <Route path="/login" element={<LoginPage />}/> */}
                <Route exact path="/login" element={<Login />}/>
                <Route path="*" element={<ErrorPage />} />
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/oneproduct/:id" element={<CatgoryIndex />} />
                <Route exact path="/cart" element={<CartIndex />} />
                <Route exact path="/checkout" element={<Checkout />}/>
            </Routes> 
        </>
    );
};

export default RouterPage;