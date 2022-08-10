//router
import IndexRoutes from "./router/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
			}}
		>
			<Header />
			<IndexRoutes />
			<Footer />
		</div>
	);
}

export default App;
