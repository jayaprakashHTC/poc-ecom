import React, {useState} from "react";
import Images from "../assets/images/HTC-Logo_Yellow.png";
import {Link} from "react-router-dom";
import { BiMap } from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai";
import {BsCart2} from "react-icons/bs";
// import MenusItems from "../shared/menusItems.jsx";
import Login from "../components/Login.jsx";
import { useForm } from "react-hook-form";
import useLogin from "../components/custom-hooks/Login-hook.jsx";


const Header = () => {
    const [returnValue] = useLogin();
    // console.log("loginUsersHeader", returnValue);
    // const [isLoading, setIsLoading] = useLogin();
    // /console.log(isLoading);
    const {reset} = useForm();
    const [show, setShow] = useState(false);
    

    const handleClose = () => {
        setShow(false);
        reset();
    };
    const handleShow = () => {
        setShow(true);
        // setIsLoading(false);
    };
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
                    <div className="search-bar">
                        <form>
                            <div>
                                <select className="formcontrol selectdrop">
                                    <option value="all">All</option>
                                    <option value="all">Books</option>
                                    <option value="all">Electricals</option>
                                </select>
                                <input type="text" className="formcontrol input"/>
                                <button type="button"className="formcontrol search-btn"><BsSearch /></button>
                            </div>
                        </form>
                    </div>
                    <div className="sign-in">
                        <button type="button" onClick={handleShow}>
                            <p>Hello {returnValue}, sign in <AiFillCaretDown /></p>
                        </button>
                    </div>
                    <div className="cart">
                        <button type="button">
                            <BsCart2 className="bscart"/>
                            <span className="carts">Cart</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="menu-header">
                <nav>
                    <MenusItems />
                </nav>
            </div> */}

            <Login show={show} handleClose={handleClose}/>
        </>
    );
};

export default Header;