import {USERS_LOGIN, PRODUCTS_DATA, MENU_ITEMS, CATEGORIES_DATA, ONE_CATEGORIES_DATA, INCREMENT_TYPE, SEARCH_FILTER } from "../types/productType";

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
    oneCatgorie:[],
};
const initialMenuData = {
    menus:[]
};

const initialCartCount = {
    count:0,
};


const usersReducers = (state = initialState, action) =>{
    switch(action.type){
    case USERS_LOGIN:
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
        return{
            ...state,
            products:action.payload,
        };
    case CATEGORIES_DATA:
        return{
            ...state,
            products:action.payload,
        };
    case ONE_CATEGORIES_DATA:
        return{
            ...state,
            oneCatgorie:action.payload,
        };
    case SEARCH_FILTER:
        return{
            ...state,
            products: state.products.filter((job)=> job.title.toLowerCase().includes(action.payload.toLowerCase()))
        };
    default: return state;
    }
};
const menuReducers = (state = initialMenuData, action) =>{
    switch(action.type){
    case MENU_ITEMS:
        return{
            ...state,
            menus:action.payload,
        };
    default: return state;
    }
};

const cartCountReducer = (state = initialCartCount, action) =>{
    switch(action.type){
    case INCREMENT_TYPE:
        return{
            ...state,
            count:state.count + 1
        };
    default: return state;
    }
};

const cart = [];

const handleCart =(state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
    case "ADDITEM":{
        const exist = state.find((x)=> x.id === product.id);
        if(exist){
            return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty + 1} : x
            );
        }else{
            const product = action.payload;
            return[
                ...state,
                {
                    ...product,
                    qty: 1,
                }
            ];
        }
    }
    case "DELITEM":{
        const exist1 = state.find((x)=> x.id === product.id);
        if(exist1.qty === 1){
            return state.filter((x)=> x.id !== exist1.id);
        }else{
            return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty-1} : null
            );
        }
    }
    default:
        return state;
    }

};

export {usersReducers, productsReducers, menuReducers, cartCountReducer, handleCart};