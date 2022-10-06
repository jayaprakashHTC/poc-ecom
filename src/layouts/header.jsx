import React, {useEffect, useState} from "react";
import Images from "../assets/images/HTC-Logo_Yellow.png";
import {Link} from "react-router-dom";
import { BiMap } from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai";
import {BsCart2} from "react-icons/bs";
import Login from "../components/Login.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMenuData } from "../store/action/usersActions";
import useSelectMenu from "../components/custom-hooks/useSelectMenu";
import useDropDown from "../components/custom-hooks/useDropDown";


// import useDropDown from "../components/custom-hooks/useDropDown";
// import MenusItems from "../shared/menusItems.jsx";







const Header = () => {
    
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const user = JSON.parse(localStorage.getItem("user"));
    const menus = useSelector(state => state.menuReducers.menus);
    console.log("user", user);
    // const handlerLogout = () =>{
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //     window.location.reload(false);
    // };
   
    const [allCat] = useSelectMenu();

    const {setSearch} = useDropDown();
    

    console.log("menus", menus);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getMenuData());
    },[dispatch]);

   

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
                                <select onChange={e => allCat(e.target.value)} className="formcontrol selectdrop">
                                    <option>All</option>
                                    {
                                        menus.map(cat => <option key={cat}>{cat}</option>)
                                    }
                                </select>
                                {/* <select className="formcontrol selectdrop">
                                    <option value="all">All</option>
                                    <option value="all">Books</option>
                                    <option value="all">Electricals</option>
                                </select> */}
                                <input type="text" className="formcontrol input" onChange={(e) => setSearch(e.target.value)} />
                                
                                <button type="button"className="formcontrol search-btn"><BsSearch /></button>
                            </div>
                        </form>
                    </div>
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
                        <button type="button">
                            <BsCart2 className="bscart"/>
                            <span className="carts">Cart</span>
                        </button>
                    </div>
                </div>
            </div>
           
            <Login show={show} handleClose={handleClose} setShow={setShow}/>
           
        </>
    );
};

export default Header;