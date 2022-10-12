import React, { useCallback, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMenuData } from "../store/action/usersActions";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import PropTypes from "prop-types";

const SearchSection = () => {
    const navigate = useNavigate();
    const products = useSelector(state => state.productsReducers.products);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
    const menus = useSelector(state => state.menuReducers.menus);
    const dispatch = useDispatch();
    const data = useCallback(()=>{
        dispatch(getMenuData());
    },[dispatch]);
    useEffect(() =>{
        data();
    },[data]);
  
    const handleOnSearch = (string, results) => {
        setSearch(string);
    };
    const handleOnSelect = (item) => {
        console.log("item", item);
    };
   
  

    const handleSubmit = () =>{
        navigate(`/search/${search}`, { state: { category: category, search:search } });
    };
    return (
        <div className="search-bar">
            <div className="flex-container">
                <div>
                    <select onChange={e => setCategory(e.target.value)} className="formcontrol">
                        <option value="all">All</option>
                        {
                            menus.map(cat => <option key={cat}>{cat}</option>)
                        }
                    </select>
                </div>
               
                {/* <input
                    type="search"
                    placeholder="search..."
                    onChange={e => setSearch(e.target.value)}
                    className="formcontrol input"
                /> */}
                <div>
                    <ReactSearchAutocomplete
                        items={products}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        fuseOptions={{ keys: ["title", "category"] }}
                        resultStringKeyName="title" 
                        showIcon={false}
                        styling={{
                            height: "34px",
                            border: "1px solid darkgreen",
                            borderRadius: "4px",
                            backgroundColor: "white",
                            boxShadow: "none",
                            hoverBackgroundColor: "lightgreen",
                            color: "darkgreen",
                            fontSize: "12px",
                            fontFamily: "Courier",
                            iconColor: "green",
                            lineColor: "lightgreen",
                            placeholderColor: "darkgreen",
                            clearIconMargin: "3px 8px 0 0",
                            zIndex: 2,
                        }}
                    
                    />
                </div>
                <div>
                    <button type="button" className="search-btn" onClick={handleSubmit}><BsSearch /></button>
                </div>
               
                
            </div>
        </div>
    );
};

SearchSection.propTypes = {
    autoFocus: PropTypes.any
};

export default SearchSection;