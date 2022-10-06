import React, { useEffect } from "react";
// import {menus} from "../assets/data/menuItems";
// import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getMenuData} from "../store/action/usersActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useSelectMenu from "../components/custom-hooks/useSelectMenu";

const MenusItems = () => {
    const [allCat] = useSelectMenu();
    const menus = useSelector(state => state.menuReducers.menus);
    console.log("menus", menus);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getMenuData());
    },[dispatch]);
    return (
        <div>
            <nav>
                <ul>
                    <select onChange={e => allCat(e.target.value)} className="me-4">
                        <option>All</option>
                        {
                            menus.map(cat => <option key={cat}>{cat}</option>)
                        }
                    </select>
                    {
                        menus.map((items, index) => {
                            return(
                                <li key={index}>
                                    <Link to={items.id} onClick={(e) =>{allCat(e.target.innerText);}}>{items}</Link>
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