import { useState } from "react";
import "./InputSearch.scss";
import { useSearchNews } from "../../hooks/useSearchNews";
import { Alert } from "react-bootstrap";

const InputSearch = () => {
	const { setSearchNew } = useSearchNews();
	const [inputSearch, setInputSearch] = useState("");
	const [error, setError] = useState(false);

	const handleSearch = ({ target: { value } }) => setInputSearch(value);

	const handleSubmit = (e) => {
		if (inputSearch.length < 3) {
			setError(true);
		} else {
			setSearchNew(inputSearch);
			setError(false);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<>
			<div class="group mb-4">
				<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
					<g>
						<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
					</g>
				</svg>
				<input
					placeholder="Search"
					type="search"
					name="search"
					className="input"
					onChange={handleSearch}
					onKeyPress={handleKeyPress}
				/>
			</div>
			<button onClick={handleSubmit} disabled={inputSearch.length < 3 ? true : false} >Buscar</button>
			{error && ( <Alert variant="danger" className="mb-5 mt-2" >Ingrese una busqueda de al menos 3 caracteres</Alert> )}
		</>
	);
};

export default InputSearch;
