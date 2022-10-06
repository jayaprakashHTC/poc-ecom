import React from "react";
// import { useNavigate } from "react-router-dom";
// import BannerSection from "../components/BannerSection.jsx";
import ProductsDetails from "../components/all/ProductsDetails.jsx";
import Layout from "../layouts/index.jsx";
// import AllCatgoriesDetails from "../components/AllCatgoriesDetails.jsx";

const Home = () => {
    // const history = useNavigate();
    // useEffect(() =>{
    //     if(!localStorage.getItem("token")){
    //         history("/login");
    //     }
    // }, []);
    return (
        <Layout>
            {/* <BannerSection /> */}
            <ProductsDetails />
            {/* <AllCatgoriesDetails/> */}
        </Layout>
    );
};

export default Home;