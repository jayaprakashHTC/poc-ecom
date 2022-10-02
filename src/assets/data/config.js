const configData = process.env.REACT_APP_API;

const config = {};

try {
    config.apiUrl =
    configData ||
    "https://fakestoreapi.com/";
} catch {
    config.apiUrl = "https://fakestoreapi.com/";
}

module.exports = config;