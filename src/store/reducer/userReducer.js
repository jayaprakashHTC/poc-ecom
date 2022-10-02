import {USERS_LOGIN, PRODUCTS_DATA, MENU_ITEMS, CATEGORIES_DATA } from "../types/productType";

const initialState = {
    usersData:{
        username:"galla",
        password:"galla27159"
    },
    loading:false
};
const initialProductsData = {
    products:[],
    catgories:[],
};
const initialMenuData = {
    menus:[]
};


const usersReducers = (state = initialState, action) =>{
    switch(action.type){
    case USERS_LOGIN:
        console.log("reducerSate", state);
        return{
            usersData:action.payload,
            loading:false
        };
   
    default: return state;
    }
};

const productsReducers = (state = initialProductsData, action) =>{
    switch(action.type){
    case PRODUCTS_DATA:
        console.log("reducerSate", state);
        return{
            ...state,
            products:action.payload,
        };
    case CATEGORIES_DATA:
        return{
            ...state,
            products:action.payload,
        };
    default: return state;
    }
};
const menuReducers = (state = initialMenuData, action) =>{
    switch(action.type){
    case MENU_ITEMS:
        console.log("reducerSate", state);
        return{
            ...state,
            menus:action.payload,
        };
    default: return state;
    }
};

export {usersReducers, productsReducers, menuReducers};