import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCatgeroiesData} from "../store/action/usersActions";
const AllCatgoriesDetails = () => {
    const cat = useSelector(state => state);
    console.log("cat", cat);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getCatgeroiesData());
    }, [dispatch]);
    return (
        <div>AllCatgoriesDetails</div>
    );
};

export default AllCatgoriesDetails;