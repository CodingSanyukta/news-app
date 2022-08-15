import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer
			className="footer"
			style={{
				position: "absolute",
				backgroundColor: "white",
				bottom: 0,
				width: "100%",
			}}
		>
			<div className="footer-body">
				<ul className="left-panel list-inline mb-0 p-0">
					<li className="list-inline-item">
						<Link to="#">Privacy Policy</Link>
					</li>
					<li className="list-inline-item">
						<Link to="#">Terms of Use</Link>
					</li>
				</ul>
				<ul className="right-panel list-inline mb-0 p-0">
					©2022 NewsApp with{" "}
					<span className="text-primary">Lucas Canteros - React Grupo 2</span>
				</ul>
				<div>
					Hope UI, Made with design by{" "}
					<Link to="https://iqonic.design/">IQONIC Design</Link>.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
