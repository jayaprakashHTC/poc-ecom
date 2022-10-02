import React from "react";
// import BannerSection from "../components/BannerSection.jsx";
import ProductsDetails from "../components/all/ProductsDetails.jsx";
import Layout from "../layouts/index.jsx";
// import AllCatgoriesDetails from "../components/AllCatgoriesDetails.jsx";

const Home = () => {
    return (
        <Layout>
            {/* <BannerSection /> */}
            <ProductsDetails />
            {/* <AllCatgoriesDetails/> */}
        </Layout>
    );
};

export default Home;