import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
const OneProductsData = () => {
    const [oneData, setOneData] = useState([]);
    console.log("oneData",oneData);
    const {id} = useParams();
    console.log(id);
    const handleSingaleProduct = (title) =>{
        console.log("id", title);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res =>{
                setOneData(res.data);
            })
            .catch(err =>{
                console.log("err", err);
            });
    };


    useEffect(() =>{
        handleSingaleProduct();
    },[]);

    return (
        <div>OneProductsData</div>
    );
};

export default OneProductsData;