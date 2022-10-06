import { useSelector, useDispatch } from "react-redux";
import { getCatgeroiesData, getProductsData } from "../../store/action/usersActions";

const useSelectMenu = () => {
    const products = useSelector(state => state.productsReducers.products);
    console.log("products", products);
    const category = "All";
    const dispatch = useDispatch();
    const allCat = (cat) =>{
        dispatch(getProductsData());
        products === category ? dispatch(getProductsData()) : dispatch(getCatgeroiesData(cat));
        // setCategory(products);
    };

    return [allCat];
};

export default useSelectMenu;