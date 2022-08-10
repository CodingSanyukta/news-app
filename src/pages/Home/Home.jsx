import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

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
			<span className="uisheet screen-darken"></span>
			<div className=" body-class-1 container">
				<h1 className="text-center">
					<span className="text-primary">
						<strong>React</strong>
					</span>{" "}
					<span className="text-success">
						<strong>Bootstrap</strong>
					</span>{" "}	
					<span className="text-danger">	
						<strong>News Page</strong>
					</span>
				</h1>
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
