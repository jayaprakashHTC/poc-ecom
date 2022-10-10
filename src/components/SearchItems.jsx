import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const SearchItems = () => {
    const [users, setUsers] = useState([]);
    const location = useLocation();
    // const users = location?.state?.users
    console.log("users", users);
    const category = location?.state?.category;
    const search = location?.state?.search;
   
    useEffect(() =>{
        const fetchData = () =>{
            axios.get("https://fakestoreapi.com/products")
                .then(res =>{
                    setUsers(res.data);
                });
        };
        fetchData();
    },[]);
  

    const byCategory = (user, category) => {
        if (category) {
            return user.category === category;
        } else return user;
    };
    const bySearch = (user, search) => {
        if (search) {
            return user.title.toLowerCase().includes(search.toLowerCase());
        } else return user;
    };
    
    const filteredList = (users, category, search) => {
        return users
            .filter(user => byCategory(user, category))
            .filter(user => bySearch(user, search));
    };
    
    return (
        <div className="products-section">
            <div className="container">
                <div className="row">      
                    {filteredList(users, category, search).map(user => (
                        // <div key={user.id}>
                        //     {user.title} : {user.category}
                        // </div>
                        <div key={user.id} className="col-md-3 mt-4">
                            <div className="product_list">
                                <Link
                                    className="products-btn-link"
                                    to={`/oneproduct/${user.id}`}
                                >
                                    <h2 className="title">{user.title}</h2>
                                    <div className="img-div">
                                        <img 
                                            src={user.image} 
                                            alt="" 
                                        />
                                    </div>
                                    <h5 className="mt-3"><FaRupeeSign /> {user.price}</h5>
                                    <p>
                                        <AiFillStar className="stars"/>
                                        <AiFillStar className="stars"/>
                                        <AiFillStar className="stars"/>
                                        <AiFillStar className="stars"/>
                                        <AiOutlineStar className="stars-empty" />
                                        {user.rating.rate}</p>
                                </Link>
                            </div>
                        </div>    
                    ))}                  
                </div>
            </div>
        </div>
    );
};

export default SearchItems;