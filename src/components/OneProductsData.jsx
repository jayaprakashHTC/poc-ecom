import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getOneCatgeroiesData} from "../store/action/usersActions";
import { useParams } from "react-router-dom";
import {AiFillStar} from "react-icons/ai";
import {BsCart2} from "react-icons/bs";
import { addToCart } from "../store/action/productAddCartAction";


const OneProductsData = () => {
    const {id} = useParams();
    const product = useSelector(state => state.productsReducers.oneCatgorie);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getOneCatgeroiesData(id));
    },[dispatch,id]);

    const addCart = (id) =>{
        dispatch(addToCart(id));
    };

    return (
        <div className="catgory-section" key={product.id}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={product.image} alt="" className="img-cat"/>
                    </div>
                    <div className="col-md-7">
                        <p>{product.category}</p>
                        <h2>{product.title}</h2>
                        <h5><AiFillStar className="stars"/> {product?.rating?.rate} ({product?.rating?.count})</h5>
                        <h4>Price : $ {product?.price}</h4>
                        <p className="mt-4">{product.description}</p>
                        <div className="cart-btn">
                            <button type="button" onClick={() =>addCart(product.id)}> <BsCart2 /> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneProductsData;