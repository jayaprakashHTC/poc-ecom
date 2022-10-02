import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuData } from "../../store/action/usersActions";

const useMenu = () => {
    const menus = useSelector(state => state.menuReducers.menus);
    console.log("menus", menus);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getMenuData());
    },[dispatch]);

    return [menus];
};

export default useMenu;