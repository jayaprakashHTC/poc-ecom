import React from "react";
import CateorySection from "../../components/CateorySection.jsx";
import Layout from "../../layouts/index.jsx";
import SeoBlock from "../../layouts/seo/index.js";

const CateoryIndex = () => {
    return (
        <Layout>
            <SeoBlock
                HeadTitle={"HTC | Category"}
                HeadDescription={"Category"}
            />
            <CateorySection />
        </Layout>
    );
};

export default CateoryIndex;