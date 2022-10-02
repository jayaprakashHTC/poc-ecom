import axios from "axios";
// import ax from "../services/index";

export default class ProductsServices {
    standardDataGetApi() {
        return axios.get("https://fakestoreapi.com/products");
    }
    standardMenuDataGetApi() {
        return axios.get("https://fakestoreapi.com/products/categories");
    }
    standardCatgoriesDataGetApi(cat) {
        return axios.get(`https://fakestoreapi.com/products/category/${cat}`);
    }
}
