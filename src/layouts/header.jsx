import React, {useCallback, useEffect, useState} from "react";
import Images from "../assets/images/HTC-Logo_Yellow.png";
import {Link, useNavigate} from "react-router-dom";
import { BiMap } from "react-icons/bi";
import {AiFillCaretDown} from "react-icons/ai";
import {BsCart2} from "react-icons/bs";
import Login from "../components/Login.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMenuData} from "../store/action/usersActions";
// import useSelectMenu from "../custome/useSelectMenu";
import MenusItems from "../components/MenusItems.jsx";
import SearchSection from "../components/SearchSection.jsx";

const Header = () => {
    const navigate = useNavigate();
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const state = useSelector((state)=> state.handleCart);
    const user = JSON.parse(localStorage.getItem("user"));
    // const menus = useSelector(state => state.menuReducers.menus);
    // const [allCat] = useSelectMenu();

    const dispatch = useDispatch();
    const data = useCallback(()=>{
        dispatch(getMenuData());
    },[dispatch]);
    useEffect(() =>{
        data();
    },[data]);

    return (
        <>
            <div className="header-section">
                <div className="flex-container">
                    <div className="logo-image">
                        <Link to="/">
                            <img src={Images} alt="" className="image"/>
                        </Link>    
                    </div>
                    <div className="location">
                        <div className="flex-container">
                            <div>
                                <BiMap className="bimap"/>
                            </div>
                            <div>
                                <p>Deliver to</p>
                                <p><strong>India</strong></p>
                            </div>
                        </div>
                    </div>
                    <SearchSection />
                    <div className="sign-in">
                        {/* <button type="button" onClick={handleShow}>
                            <p>Hello , sign in <AiFillCaretDown /></p>
                        </button> */}
                        {
                            user ? (
                                <>
                                    <button type="button" onClick={handleShow}>
                                        <p>Hello , {user} </p>
                                    </button> 
                                </>
                            ) : 
                                <>
                                    <button type="button" onClick={handleShow}>
                                        <p>Hello , sign in <AiFillCaretDown /></p>
                                    </button> 
                                </>
                        }
                    </div>
                    <div className="cart">
                        <button type="button" onClick={() =>navigate("/cart")}>
                            <BsCart2 className="bscart"/>
                            <span className="carts">({state.length})</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="menu-header">
                <nav>
                    <MenusItems/>
                </nav>
            </div>
           
            <Login show={show} handleClose={handleClose} setShow={setShow}/>
           
        </>
    );
};

export default Header;