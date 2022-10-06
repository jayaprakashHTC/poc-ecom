import {applyMiddleware, combineReducers, createStore, compose} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {usersReducers, productsReducers, menuReducers, cartCountReducer, handleCart} from "./reducer/userReducer";
const rootReducer = combineReducers({
    usersReducers:usersReducers,
    productsReducers:productsReducers,
    menuReducers:menuReducers,
    cartCountReducer:cartCountReducer,
    handleCart:handleCart
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
export default store;