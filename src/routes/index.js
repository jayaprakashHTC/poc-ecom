import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/index.jsx";
import ErrorPage from "../pages/404/index.jsx";
// import ProductsIndex from "../pages/all/index.js";


// import LoginPage from "../pages/login/index.jsx";

const RouterPage = () => {
   
    return (
        <>
            <Routes>
                {/* <Route path="/login" element={<LoginPage />}/> */}
                <Route path="*" element={<ErrorPage />} />
                <Route exact path="/" element={<Home />}></Route>
            </Routes> 
        </>
    );
};

export default RouterPage;