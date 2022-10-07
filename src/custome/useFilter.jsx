import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../store/action/usersActions";

const useFilter = () => {
    const [filteredData,setFilteredData] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");
    const searchItems = useSelector(state => state.productsReducers.products);     
    const {filtered} = searchItems;  
    const dispatch = useDispatch();       
    const getJobs=()=>{
        dispatch(searchFilter());
        setFilteredData(filtered);
    };

    const handleSearch = (e) =>{
        e.preventDefault();
        getJobs();
        
    };
    
    return [searchTerm , setSearchTerm, handleSearch, filteredData];
};

export default useFilter;