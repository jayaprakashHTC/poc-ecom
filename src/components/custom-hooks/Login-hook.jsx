import {useState} from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const useLogin = () =>{
    const users = useSelector(state => state.usersReducers.usersData);
    const { reset } = useForm();
    // console.log("users", users);
    const userDetails = {
        username:"",
        password:""
    };
    const [loginUsers, setLoginUsers] = useState(userDetails);
    const [errorMess, setError] = useState();
    const [returnValue, setReturnValue] = useState();
    // console.log("returnValue", returnValue);
    const [isLoading, setIsLoading] = useState(false);
    const { username, password } = loginUsers;
    const handleChange = (e) => {
        setLoginUsers({ ...loginUsers, [e.target.name]: e.target.value });
    };
    const onSubmit = () =>{
        if(users.username === username && users.password === password){
            // navigate("/mobiles");
            // console.log("user,password", username, password);
            setReturnValue(username);
            setIsLoading(true);
        }else if(users.username !== username){
            setError("Please enter valid username");
        }else if(users.password !== password){
            setError("Please enter valid password");
        }
        if(users.username !== username && users.password !== password){
            setError("Please enter valid username and password");
        } 
        reset();
        // return username;
    };
    // const r = username;
    // console.log("returnUserName", r);

    // useEffect(() =>{
    //     setReturnValue(r);
    // },[r]);
    
    return [handleChange, errorMess, isLoading, onSubmit, returnValue];
};

export default useLogin;