import { USERS_LOGIN, PRODUCTS_DATA, MENU_ITEMS, CATEGORIES_DATA, ONE_CATEGORIES_DATA, INCREMENT_TYPE, SEARCH_FILTER } from "../types/productType";
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

export const searchFilter = (searchText) =>{
    return{
        type:SEARCH_FILTER,
        payload:searchText
    };
};

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




