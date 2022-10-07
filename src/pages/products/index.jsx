import React from "react";
import OneProductsData from "../../components/OneProductsData.jsx";
import Layout from "../../layouts/index.jsx";
import SeoBlock from "../../layouts/seo/index.js";

const Home = () => {
  
    return (
        <Layout>
            <SeoBlock
                HeadTitle={"HTC | Catgory Products"}
                HeadDescription={"Catgory Products"}
            />
            <OneProductsData />
        </Layout>
    );
};

export default Home;