import { useContext } from "react";
import { searchNewsContext } from "../contexts/searchNewsContext";

export const useSearchNews = () => {
	const context = useContext(searchNewsContext);
	return context;
};