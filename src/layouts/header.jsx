import React, {useEffect, useState} from "react";
import Images from "../assets/images/HTC-Logo_Yellow.png";
import {Link, useNavigate} from "react-router-dom";
import { BiMap } from "react-icons/bi";
import {AiFillCaretDown} from "react-icons/ai";
import {BsCart2} from "react-icons/bs";
import Login from "../components/Login.jsx";
import MenusItems from "../components/MenusItems.jsx";
import SearchSection from "../components/SearchSection.jsx";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const cart = useSelector(state => state.productsReducers.cart);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });
  
        setCartCount(count);
    }, [cart, cartCount]);
    
    return (
        <>

            <Navbar collapseOnSelect expand="lg" className="header-section" variant="dark">
               
                <Navbar.Brand>
                    <div className="logo-image">
                        <Link to="/">
                            <img src={Images} alt="" className="image"/>
                        </Link>   
                        <div className="cart">
                            <button type="button" onClick={() =>navigate("/cart")}>
                                <BsCart2 className="bscart"/>
                                <span className="carts">{cartCount}</span>
                            </button>
                        </div> 
                    </div>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <div>
                            <div className="flex-container">
                              
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
                                        <span className="carts">{cartCount}</span>
                                    </button>
                                </div>
                            </div>
                        </div> */}
                        <div className="flex-items">
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
                           
                        </div>
                    </Nav>
                      
                </Navbar.Collapse>
               
            </Navbar>
          
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