import config from "../assets/data/config";
import axios from "axios";

const ax = axios.create({
    baseURL: config.apiUrl,
});

export default ax;
