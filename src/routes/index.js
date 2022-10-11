import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import CheckoutIndex from "../pages/checkout/index.js";
// import SearchIndex from "../pages/search/index.js";
// import CateoryIndex from "../pages/category/index.js";
// import Home from "../pages/index.jsx";
// import ErrorPage from "../pages/404/index.jsx";
// import CatgoryIndex from "../pages/all/catgory/index.js";
// import CartIndex from "../pages/cart/index.js";
// import Login from "../components/Login.jsx";
// import Checkout from "../components/Checkout.jsx";






const RouterPage = () => {

    const Home = lazy(() =>import("../pages/home/index.jsx"));
    const ErrorPage = lazy(() =>import("../pages/404/index.jsx"));
    const ProductIndex = lazy(() =>import("../pages/products/index.jsx"));
    const CartIndex = lazy(() =>import("../pages/cart/index.js"));
    const Login = lazy(() =>import("../components/Login.jsx"));
    const CheckoutIndex = lazy(() =>import("../pages/checkout/index.js"));
    const CateoryIndex= lazy(() =>import("../pages/category/index.js"));
    const SearchIndex= lazy(() =>import("../pages/search/index.js"));
    return (
        <>
            <Routes>
                {/* <Route path="/login" element={<LoginPage />}/> */}
                <Route exact path="/login" element={<Suspense fallback={<h2 className="text-center">Loading..</h2>}><Login/></Suspense>} />
                <Route path="*" element={<Suspense fallback={<h2 className="text-center">Loading..</h2>}><ErrorPage/></Suspense>} />
                <Route exact path="/" element={<Suspense fallback={<h2 className="text-center">Loading..</h2>}><Home/></Suspense>} />
                <Route exact path="/oneproduct/:id" element={<Suspense fallback={<h2 className="text-center">Loading..</h2>}><ProductIndex/></Suspense>} />
                <Route exact path="/cart" element={<Suspense fallback={<h2 className="text-center">Loading..</h2>}><CartIndex/></Suspense>} />
                <Route exact path="/checkout" element={<Suspense fallback={<h2 className="text-center">Loading..</h2>}><CheckoutIndex /></Suspense>} />
                <Route exact path="/category/:cat" element={<Suspense fallback={<h2 className="text-center">Loading..</h2>}><CateoryIndex /></Suspense>} />
                <Route exact path="/search/:search" element={<Suspense fallback={<h2 className="text-center">Loading..</h2>}><SearchIndex /></Suspense>} />
            </Routes> 
        </>
    );
};

export default RouterPage;