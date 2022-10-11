import { ADD_TO_CART, ADJUST_ITEM_QTY, LOAD_CURRENT_ITEM, REMOVE_FROM_CART } from "../types/productAddCartType";
import {PRODUCTS_DATA, MENU_ITEMS, CATEGORIES_DATA, ONE_CATEGORIES_DATA} from "../types/productType";

const initialProductsData = {
    products:[],
    catgories:[],
    oneCatgorie:[],
    catgoriesData:[],
    cart: [],
    currentItem: null,
};
const initialMenuData = {
    menus:[]
};

const productsReducers = (state = initialProductsData, action) =>{
    switch(action.type){
    case PRODUCTS_DATA:
        return{
            ...state,
            products:action.payload,
        };
    case CATEGORIES_DATA:
        return{
            ...state,
            catgoriesData:action.payload,
        };
    case ONE_CATEGORIES_DATA:
        return{
            ...state,
            oneCatgorie:action.payload,
        };
    case ADD_TO_CART:{
        const item = state.products.find(
            (product) => product.id === action.payload.id
        );
        const inCart = state.cart.find((item) =>
            item.id === action.payload.id ? true : false
        );
      
        return {
            ...state,
            cart: inCart
                ? state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
                : [...state.cart, { ...item, qty: 1 }],
        };
    }
    case REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
    case ADJUST_ITEM_QTY:
        return {
            ...state,
            cart: state.cart.map((item) =>
                item.id === action.payload.id
                    ? { ...item, qty: +action.payload.qty }
                    : item
            ),
        };
    case LOAD_CURRENT_ITEM:
        return {
            ...state,
            currentItem: action.payload,
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
export {productsReducers, menuReducers};