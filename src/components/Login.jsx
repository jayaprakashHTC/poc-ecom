import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import axios from "axios";
// import { useNavigate} from "react-router-dom";
const Login = ({show, handleClose, setShow}) => {

    // const history = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const handlerEmail = (e) =>{
        setUsername(e.target.value);
    };
    const handlerPassword = (e) =>{
        setPassword(e.target.value);
    };
    const handlerApi = () =>{
        console.log("email, password", {username, password});
        const data = {
            username:username,
            password:password
        };
        axios.post("https://fakestoreapi.com/auth/login", data)
            .then(res =>{
                localStorage.setItem("token", res?.data?.token);
                localStorage.setItem("user", JSON.stringify(username));
                window.location.reload(false);
                setShow(false);
            })
            .catch(e =>{
                setError(e.response.data);
            });
    };
  
    const user = JSON.parse(localStorage.getItem("user"));

    const handlerLogout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setShow(false);
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className="br-none">
                    <Modal.Title className="br-none">{user ? "Sign Out": "Sign In"}</Modal.Title>
                </Modal.Header>
                {
                    user ? (
                        <>
                            <div className="p-4">
                                <p>Are you sure Sign Out!!</p>
                                <div>
                                    <button type="submit" onClick={handlerLogout}  className="login-btn">Sign Out</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="form-div">
                                <div className="input-group mb-4">
                                    <input type="text" className="form-control" value={username} onChange={handlerEmail} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" value={password} onChange={handlerPassword}/>
                                </div>
                                <p style={{color:"red"}}>{error}</p>
                                <div>
                                    <button type="submit" onClick={handlerApi} className="login-btn">Sign In</button>
                                </div>
                            </div>
                        </>
                    )
                }
              
                <Modal.Footer className="br-none">
              
                </Modal.Footer>
            </Modal>
        </>
    );
};

Login.propTypes = {
    show: PropTypes.any,
    handleClose:PropTypes.func,
    setShow:PropTypes.any
};


export default Login;