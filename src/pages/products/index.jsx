import React from "react";
import OneProductsData from "../../components/OneProductsData.jsx";
import Layout from "../../layouts/index.jsx";
import SeoBlock from "../../layouts/seo/index.js";

const ProductIndex = () => {
  
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

export default ProductIndex;