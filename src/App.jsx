//router
import IndexRoutes from "./router/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SearchNewsProvider } from "./contexts/searchNewsContext";

//scss
import "./assets/scss/hope-ui.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/customizer.scss";

//img
import topImage from "./assets/images/top-image.gif";

function App() {
	return (
		<div
			className="App"
			style={{
				background: `url(${topImage})`,
				position: "relative",
				minHeight: "100vh",
			}}
		>
			<SearchNewsProvider>
				<Header />
				<IndexRoutes />
				<Footer className="position"/>
			</SearchNewsProvider>
		</div>
	);
}

export default App;
