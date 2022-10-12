import React from "react";
import { useSelector } from "react-redux";
// import {getMenuData} from "../store/action/usersActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useDropDown from "../custome/useDropDown";


const MenusItems = () => {
    const {allCat} = useDropDown();
    const menus = useSelector(state => state.menuReducers.menus);
    // const dispatch = useDispatch();
    // const data = useCallback(()=>{
    //     dispatch(getMenuData());
    // },[dispatch]);
    // useEffect(() =>{
    //     data();
    // },[data]);
    return (
        <div>
            <nav>
                <ul>
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


export default MenusItems;