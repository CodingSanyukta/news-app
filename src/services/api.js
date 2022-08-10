import axios from "axios";

const API = axios.create({
    baseURL: "https://deisy-back.herokuapp.com/api/v1/",
    timeout: 5000,
});

export { API };