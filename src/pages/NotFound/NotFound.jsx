import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.scss"
// img
import error404 from "../../assets/images/error/404.png";

const Error404 = () => {
	return (
		<>
			<div className="bg">
				<Container>
					<Image src={error404} className="img-fluid mb-4 w-50" alt="" />
					<h2 className="mb-0 mt-4 text-white">
						Oops! This Page is Not Found.
					</h2>
					<p className="mt-2 text-white">The requested page dose not exist.</p>
					<Link
						className="btn bg-white text-primary d-inline-flex align-items-center"
						to="/"
					>
						Back to Home
					</Link>
				</Container>

			</div>
		</>
	);
};

export default Error404;
