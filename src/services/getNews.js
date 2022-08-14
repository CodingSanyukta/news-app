import { API } from "./api";

export function getNews(size = 10, page = 1, search = "") {
	return API.get(
		`everything?q=${search}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=${size}`
	);
}
