import { API } from "./api";

export function getPets(size = 8, page = 0, name = "") {
	if (name === "") {
		return API.get(`/pets?size=${size}&page=${page}`);
	}
	return API.get(`pets?size=${size}&page=${page}&name=${name}`);
}
