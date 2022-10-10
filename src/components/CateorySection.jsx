import React, { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCatgeroiesData } from "../store/action/usersActions";

const CateorySection = () => {
    const data = useSelector(state => state.productsReducers.catgoriesData);
    console.log("category", data);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getCatgeroiesData());
    },[dispatch]);
    
    return (
        <div className="products-section">
            <div className="container">
                <div className="row">
                    {
                        data && data?.map(items =>{
                            return(
                                <div key={items.id} className="col-md-3 mt-4">
                                    <div className="product_list">
                                        <Link
                                            className="products-btn-link"
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
                                </div>    
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CateorySection;