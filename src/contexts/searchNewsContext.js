import { createContext, useContext, useState } from "react";

export const searchPetsContext = createContext();

export const useSearchPets = () => {
	const context = useContext(searchPetsContext);
	return context;
};

export function SearchPetsProvider({ children }) {
	const [searchPet, setSearchPet ] = useState("");

	return (
		<searchPetsContext.Provider
			value={{ searchPet, setSearchPet }}
		>
			{children}
		</searchPetsContext.Provider>
	);
}