import { bindActionCreators } from "redux";
import { Button, Image } from "react-bootstrap";
import logo from "../../assets/images/news.png";
import InputSearch from "../../components/InputSearch/InputSearch";

//prism
import "../../../node_modules/prismjs/prism";
import "../../../node_modules/prismjs/themes/prism-okaidia.css";

// store
import {
	NavbarstyleAction,
	getDirMode,
	getcustomizerMode,
	getcustomizerprimaryMode,
	getcustomizerinfoMode,
	SchemeDirAction,
	ColorCustomizerAction,
	getNavbarStyleMode,
	getSidebarActiveMode,
	SidebarActiveStyleAction,
	getDarkMode,
	ModeAction,
	SidebarColorAction,
	getSidebarColorMode,
	getSidebarTypeMode,
} from "../../store/setting/setting";
import { connect } from "react-redux";
import NewsList from "../../views/NewsList";

const mapStateToProps = (state) => {
	return {
		darkMode: getDarkMode(state),
		customizerMode: getcustomizerMode(state),
		cololrinfomode: getcustomizerinfoMode(state),
		colorprimarymode: getcustomizerprimaryMode(state),
		schemeDirMode: getDirMode(state),
		sidebarcolorMode: getSidebarColorMode(state),
		sidebarTypeMode: getSidebarTypeMode(state),
		sidebaractivestyleMode: getSidebarActiveMode(state),
		navbarstylemode: getNavbarStyleMode(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(
		{
			ModeAction,
			SchemeDirAction,
			SidebarColorAction,
			SidebarActiveStyleAction,
			NavbarstyleAction,
			ColorCustomizerAction,
		},
		dispatch
	),
});

const Home = (props) => {
	//   darkmode
	const colorMode = sessionStorage.getItem("color-mode");
	if (colorMode === null) {
		props.ModeAction(props.darkMode);
	} else {
		props.ModeAction(colorMode);
	}
	// colocustomizermode
	const colorcustomizerMode = sessionStorage.getItem("color-customizer-mode");
	const colorcustomizerinfoMode = sessionStorage.getItem(
		"colorcustominfo-mode"
	);
	const colorcustomizerprimaryMode = sessionStorage.getItem(
		"colorcustomprimary-mode"
	);
	if (colorcustomizerMode === null) {
		props.ColorCustomizerAction(
			props.customizerMode,
			props.cololrinfomode,
			props.colorprimarymode
		);
		document.documentElement.style.setProperty(
			"--bs-info",
			props.cololrinfomode
		);
	} else {
		props.ColorCustomizerAction(
			colorcustomizerMode,
			colorcustomizerinfoMode,
			colorcustomizerprimaryMode
		);
		document.documentElement.style.setProperty(
			"--bs-info",
			colorcustomizerinfoMode
		);
	}

	// rtlmode
	const rtlMode = sessionStorage.getItem("rtl-mode");
	if (rtlMode === null) {
		props.SchemeDirAction(props.schemeDirMode);
	} else {
		props.SchemeDirAction(rtlMode);
	}

	return (
		<>
			<div className="main-img">
				<div className="container">
					<Image src={logo} alt="logo" className="img-fluid" width="150" />
					<h1 className="my-4">
						<span>News App</span>
					</h1>
					<h4 className="text-white">📰Busca noticias de todo el mundo🌍</h4>
				</div>
			</div>
			<div className="container">
				<div className="m-4 d-flex justify-content-center">
					<InputSearch />
				</div>
				<div className="row mb-5">
					<NewsList />
				</div>
			</div>
			<div id="back-to-top" style={{ display: "none" }}>
				<Button size="xs" variant="primary  p-0 position-fixed top" href="#top">
					<svg
						width="30"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 15.5L12 8.5L19 15.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</Button>
			</div>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
