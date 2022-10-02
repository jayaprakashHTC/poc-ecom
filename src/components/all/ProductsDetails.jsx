import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCatgeroiesData, getProductsData} from "../../store/action/usersActions";
import {FaRupeeSign} from "react-icons/fa";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import MenusItems from "../../shared/menusItems.jsx";
import BannerSection from "../BannerSection.jsx";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const ProductsDetails = () => {
    const [category, setCategory] = useState("All");
    // const naviagte = useNavigate();
    // console.log("category", category);
    const produ = useSelector(state => state.productsReducers.products);
    const products = useSelector(state => state.productsReducers.products);
    console.log("products", products);

    // const [oneData, setOneData] = useState([]);
    // console.log("oneData",oneData);
   

    const dispatch = useDispatch(getProductsData);

    useEffect(() =>{
        dispatch(getProductsData());
        // dispatch(getCatgeroiesData());
    },[dispatch]);
    

    const allCat = (cat) =>{
        dispatch(getProductsData());
        produ === category ? dispatch(getProductsData()) : dispatch(getCatgeroiesData(cat));
        setCategory(produ);
    };

    // const handleSingaleProduct = (id) =>{
    //     console.log("id", id);
    //     axios.get(`https://fakestoreapi.com/products/${id}`)
    //         .then(res =>{
    //             setOneData(res.data);
    //             naviagte("/oneproduct");
    //         })
    //         .catch(err =>{
    //             console.log("err", err);
    //         });
    // };
    
    return (
        <>
            <div className="menu-header">
                <nav>
                    <MenusItems allCat={allCat} />
                </nav>
            </div>
            <BannerSection />
            <div className="products-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="mt-4">Product Details</h2>
                        </div>
                        {
                            products && products?.map(items =>{
                                return(
                                    <div key={items.id} className="col-md-3 mt-4">
                                        <Link 
                                            // type="button"
                                            // // onKeyDown={handleSingaleProduct}
                                            // onClick={() =>handleSingaleProduct(`${items.id}`)}
                                            // className="products-btn"
                                            to={`/oneproduct/${items.id}`}
                                        >
                                            <h2 className="title">{items.title}</h2>
                                            <div className="img-div">
                                                <img 
                                                    src={items.image} 
                                                    alt="" 
                                                />
                                            </div>
                                            <h5 className="mt-3"><FaRupeeSign /> {items.price}</h5>
                                            <p>
                                                <AiFillStar className="stars"/>
                                                <AiFillStar className="stars"/>
                                                <AiFillStar className="stars"/>
                                                <AiFillStar className="stars"/>
                                                <AiOutlineStar className="stars-empty" />
                                                {items.rating.rate}</p>
                                        </Link>
                                    </div>    
                                );
                            })
                        }
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default ProductsDetails;