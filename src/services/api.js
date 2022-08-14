import axios from "axios";

const API = axios.create({
    baseURL: "https://newsapi.org/v2/",
    timeout: 5000,
});

export { API };