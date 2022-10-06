import { USERS_LOGIN, PRODUCTS_DATA, MENU_ITEMS, CATEGORIES_DATA, ONE_CATEGORIES_DATA, INCREMENT_TYPE } from "../types/productType";
import ProductsServices from "../../services/products.services";
export const usersTypeAction = (user) =>{
    return{
        type:USERS_LOGIN,
        payload:user
    };
};

export const cartCountType = () =>{
    return{
        type:INCREMENT_TYPE
    };
};

// export const productsDataType = (data) =>{
//     return{
//         type:PRODUCTS_DATA,
//         payload:data
//     };
// };

// export const getProductsData = () =>{
//     const matchingExportData = new ProductsServices();
//     console.log("matchingExportData", matchingExportData);
//     return (dispatch) =>{
//         matchingExportData.standardDataGetApi()
//             .then(res =>{
//                 const productsDataType = (data) =>{
//                     return{
//                         type:PRODUCTS_DATA,
//                         payload:data
//                     };
//                 };
//                 dispatch(productsDataType(res.data));
//                 console.log("action", dispatch(productsDataType(res.data)));
//             })
//             .catch(err =>{
//                 console.log("err", err);
//             });
//     };
// };

// const URL = 'https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products';

const matchingExportData = new ProductsServices();

export const getProductsData = () => {
    return async (dispatch) => {
        try {
            const response = await matchingExportData.standardDataGetApi();
            dispatch({ type: PRODUCTS_DATA, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getMenuData = () => {
    return async (dispatch) => {
        try {
            const response = await matchingExportData.standardMenuDataGetApi();
            dispatch({ type: MENU_ITEMS, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
};
export const getCatgeroiesData = (cat) => {
    return async (dispatch) => {
        try {
            const response = await matchingExportData.standardCatgoriesDataGetApi(cat);
            dispatch({ type: CATEGORIES_DATA, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getOneCatgeroiesData = (id) => {
    return async (dispatch) => {
        try {
            const response = await matchingExportData.standardOneCatgoriesDataGetApi(id);
            dispatch({ type: ONE_CATEGORIES_DATA, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    };
};


// For Delete Item From Cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    };
};




