
import { useMemo } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCatgeroiesData, getProductsData} from "../store/action/usersActions";

const useDropDown = () => {
    const products = useSelector(state => state.productsReducers.products);
    const dispatch = useDispatch();

    // const category = "All";
    const category = useMemo(() => "All", []);
    const allCat = (cat) =>{
        dispatch(getProductsData());
        products === category ? dispatch(getProductsData()) : dispatch(getCatgeroiesData(cat));
        // setCategory(products);
    };
    

    return {allCat};
};



export default useDropDown;