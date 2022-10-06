import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCatgeroiesData, getProductsData} from "../../store/action/usersActions";

const useDropDown = () => {
    const [search, setSearch] = useState("");
    const products = useSelector(state => state.productsReducers.products);
    console.log("products", products);
    const dispatch = useDispatch();

    const category = "All";
    const allCat = (cat) =>{
        dispatch(getProductsData());
        products === category ? dispatch(getProductsData()) : dispatch(getCatgeroiesData(cat));
        // setCategory(products);
    };

   
    
    const filteredProducts = products.filter((product) => {
        if (
            product.title.toLowerCase().includes(search)
        ) {
            return product;
        }
    });

  

    return {products, allCat, filteredProducts, setSearch};
};



export default useDropDown;