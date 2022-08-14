//router
import { Routes, Route } from "react-router-dom";
//layout pages
import {
	Home,
	About,
	Contact,
	NotFound,
} from "../pages";

const IndexRoutes = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/buscador" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default IndexRoutes;
