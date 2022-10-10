import React, { useCallback, useEffect } from "react";
// import {menus} from "../assets/data/menuItems";
// import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getMenuData} from "../store/action/usersActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useDropDown from "../custome/useDropDown";


const MenusItems = () => {
    const {allCat} = useDropDown();
    const menus = useSelector(state => state.menuReducers.menus);
    const dispatch = useDispatch();
    const data = useCallback(()=>{
        dispatch(getMenuData());
    },[dispatch]);
    useEffect(() =>{
        data();
    },[data]);
    return (
        <div>
            <nav>
                <ul>
                    {/* <select onChange={e => allCat(e.target.value)} className="me-4">
                        <option>All</option>
                        {
                            menus.map(cat => <option key={cat}>{cat}</option>)
                        }
                    </select> */}
                    <li>
                        <Link to="/">All</Link>
                    </li>
                    {
                        menus.map((items, index) => {
                            return(
                                <li key={index}>
                                    <Link to={`/category/${items}`} onClick={(e) =>{allCat(e.target.innerText);}}>{items}</Link>
                                </li>
                            );
                        })
                    } 
                </ul>
            </nav>
        </div>
    );
};

MenusItems.propTypes = {
    allCat:PropTypes.func
};

// const dataItem = menus.map(items =>({items:items.item}));




export default MenusItems;