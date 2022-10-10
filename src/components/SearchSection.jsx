import React, { useCallback, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMenuData } from "../store/action/usersActions";

const SearchSection = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
  
   
    // useEffect(() => {
    //   getUsers(userList);
    // }, []);
  
    //Simulating making api call with useEffect
    // const getUsers = userList => {
    //   setUsers(userList);
    // };

    const menus = useSelector(state => state.menuReducers.menus);
    const dispatch = useDispatch();
    const data = useCallback(()=>{
        dispatch(getMenuData());
    },[dispatch]);
    useEffect(() =>{
        data();
    },[data]);
  
  
    const handleSubmit = () =>{
        navigate(`/search/${search}`, { state: { category: category, search:search } });
    };
    return (
        <div className="search-bar">
            <div>
                {/* <select onChange={e => setCategory(e.target.value)} className="formcontrol selectdrop">
                    <option value="all">All</option>
                    <option value="electronics">electronics</option>
                    <option value="jewelery">jewelery</option>
                    <option value="men's clothing">{"men's"} clothing</option>
                    <option value="women's clothing">{"women's"} clothing</option>{" "}
                </select> */}
                <select onChange={e => setCategory(e.target.value)} className="formcontrol selectdrop">
                    <option value="all">All</option>
                    {
                        menus.map(cat => <option key={cat}>{cat}</option>)
                    }
                </select>
                <input
                    type="search"
                    placeholder="search..."
                    onChange={e => setSearch(e.target.value)}
                    className="formcontrol input"
                />
                <button type="button" className="formcontrol search-btn" onClick={handleSubmit}><BsSearch /></button>
                {/* <input type="text" value={searchText} className="formcontrol input" onChange={handlerChange}/>
                <button type="button"className="formcontrol search-btn" onClick={handlerSubmit}><BsSearch /></button> */}
            </div>
        </div>
    );
};

export default SearchSection;