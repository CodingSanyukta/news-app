import { createContext, useState } from "react";

export const searchNewsContext = createContext();

export function SearchNewsProvider({ children }) {
	const [searchNew, setSearchNew ] = useState("");

	return (
		<searchNewsContext.Provider
			value={{ searchNew, setSearchNew }}
		>
			{children}
		</searchNewsContext.Provider>
	);
}