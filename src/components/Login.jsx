import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
// import store from "../store/index";
import {useNavigate} from "react-router-dom";
// import { useSelector } from "react-redux";
import useLogin from "./custom-hooks/Login-hook.jsx";


const Login = ({show, handleClose}) => {
    const navigate = useNavigate();
    // const users = useSelector(state => state.usersReducers.usersData);
    // const isLoading = useSelector(state => state.usersReducers);
    // console.log("loading", isLoading.loading);
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [loginUsers, setLoginUsers] = useState({
    //     username:"",
    //     password:""
    // });
    const [handleChange, errorMess, isLoading, onSubmit] = useLogin();
    // console.log("loginUsersLogin", loginUsers);
    // console.log("r", r);
    // const [errorMess, setError] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    // const { username, password } = loginUsers;
    // console.log("loginUsers", loginUsers);
   
    // const onSubmit = () =>{
    //     if(users.username === username && users.password === password){
    //         // navigate("/mobiles");
    //         console.log("user,password", username, password);
    //         setIsLoading(true);
    //     }else if(users.username !== username){
    //         setError("Please enter valid username");
    //     }else if(users.password !== password){
    //         setError("Please enter valid password");
    //     }
    //     if(users.username !== username && users.password !== password){
    //         setError("Please enter valid username and password");
    //     }  
    // };
    const handlerLogout = () =>{
        navigate("/");
        handleClose(false);
    };

    return (
        <>        
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="br-none"
            >
                {
                    isLoading === false ? (
                        <>
                            <Modal.Header closeButton className="br-none">
                                <Modal.Title className="br-none">Login</Modal.Title>
                            </Modal.Header>
                            <div className="form-div">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-group mb-4">
                                        <input 
                                            {...register("username", { required: true })}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Username" 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <p className="error">{errors.username && <span>This field is required</span>}</p>
                                    {/* <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Email Id" />
                    </div> */}
                                    <div className="input-group mb-3">
                                        <input 
                                            {...register("password", { required: true })}
                                            type="password"
                                            className="form-control" 
                                            placeholder="Password" 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <p className="error">{errors.password && <span>This field is required</span>}</p>
                                    <p className="error">{errorMess}</p>
                                    <div>
                                        <button type="submit" className="login-btn">Login</button>
                                    </div>
                                </form>
                            </div>
                            <Modal.Footer className="br-none">
              
                            </Modal.Footer>
                        </>
                    ):
                        (
                            <>
                                <Modal.Header closeButton className="br-none">
                                    <Modal.Title className="br-none">
                                        <h5>Are you sure logout the page!</h5>
                                    </Modal.Title>
                                </Modal.Header>
                                <div className="form-div">
                                    <button type="button" className="login-btn" onClick={handlerLogout}>Logout</button>
                                </div>
                                <Modal.Footer className="br-none">
          
                                </Modal.Footer>
                            </>
                        )
                }
            </Modal>
               
        </>
    );
};

Login.propTypes = {
    show:PropTypes.any,
    handleClose:PropTypes.func
};


export default Login;