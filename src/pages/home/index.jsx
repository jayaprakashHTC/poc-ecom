import React from "react";
import ProductsDetails from "../../components/ProductsDetails.jsx";
import Layout from "../../layouts/index.jsx";


const Home = () => {
    // const history = useNavigate();
    // useEffect(() =>{
    //     if(!localStorage.getItem("token")){
    //         history("/login");
    //     }
    // }, []);
    return (
        <Layout>
            <ProductsDetails />
        </Layout>
    );
};

export default Home;