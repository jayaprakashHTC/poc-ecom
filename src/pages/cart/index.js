import React from "react";
import CartSection from "../../components/CartSection.jsx";
import Layout from "../../layouts/index.jsx";
import SeoBlock from "../../layouts/seo/index.js";

const CartIndex = () => {
    return (
        <Layout>
            <SeoBlock
                HeadTitle={"HTC | Cart Products"}
                HeadDescription={"Cart Products"}
            />
            <CartSection/ >
        </Layout>
    );
};

export default CartIndex;