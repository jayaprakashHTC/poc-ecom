import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsData} from "../store/action/usersActions";
import {FaRupeeSign} from "react-icons/fa";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import BannerSection from "./BannerSection.jsx";
import { Link } from "react-router-dom";

const ProductsDetails = () => {
    const products = useSelector(state => state.productsReducers.products);
    const dispatch = useDispatch(getProductsData);
    useEffect(() =>{
        dispatch(getProductsData());
    },[dispatch]);
    
    return (
        <>
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
                                        <div className="product_list">
                                            <Link 
                                                className="products-btn-link"
                                                to={`/oneproduct/${items.id}`}
                                            >
                                                <h4 className="category">{items.category}</h4>
                                                <h2 className="title mt-4">{items.title}</h2>
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