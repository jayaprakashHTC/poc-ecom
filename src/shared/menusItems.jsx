import React, { useEffect } from "react";
// import {menus} from "../assets/data/menuItems";
// import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getMenuData} from "../store/action/usersActions";
import PropTypes from "prop-types";

const MenusItems = ({allCat}) => {
    const menus = useSelector(state => state.menuReducers.menus);
    console.log("menus", menus);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getMenuData());
    },[dispatch]);
    return (
        <div>
            
            {/* <button type="button">All</button>
            {
                menus.map((items, index) => {
                    return(
                        <div key={index}>
                            <button type="button" onChange={(e) =>{allCat(e.target.value);}}>{items}</button>
                        </div>
                    );
                })
            } */}

            <select onChange={e => allCat(e.target.value)} name="" id="">

                <option>All Products</option>

                {

                    menus.map(cat => <option key={cat}>{cat}</option>)

                }



            </select>
            {/* <div>
                {

                    menus.map(cat => <button type="button" onChange={allCat()} key={cat}>{cat}</button>)

                }
            </div> */}
        </div>
    );
};

MenusItems.propTypes = {
    allCat:PropTypes.func
};

// const dataItem = menus.map(items =>({items:items.item}));




export default MenusItems;