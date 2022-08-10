import {API} from "./api";

export function getPet( id ) {
    return API.get(`pets/${id}`);
}