import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getPets } from "../../../services/getPets";
import Loader from "../../../components/Loader";
import { Pagination } from "@mui/material";
import { useSearchPets } from "../../../contexts/searchPetsContext";

import { bindActionCreators } from "redux";

// AOS
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos";
import "../../../../node_modules/aos/dist/aos.css";

import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.scss";

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
} from "../../../store/setting/setting";
import { connect } from "react-redux";

import "./PetsList.scss";

// install Swiper modules
SwiperCore.use([Navigation]);

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

const PetsList = (props) => {
	const [pets, setPets] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState();
	const [currentPage, setCurrentPage] = useState(0);
	const { searchPet } = useSearchPets();

	const handleChangePage = newPage => {
		setCurrentPage(newPage-1);
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		async function fetchPets() {
			try {
				const pets = await getPets( 8, currentPage, searchPet);
				setData(pets.data);
				setPets(pets.data.data);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		}

		fetchPets();
	}, [currentPage, searchPet]);

	useEffect(() => {
		AOS.init({
			startEvent: "DOMContentLoaded",
			disable: function () {
				var maxWidth = 996;
				return window.innerWidth < maxWidth;
			},
			throttleDelay: 10,
			once: true,
			duration: 700,
			offset: 10,
		});
		//   customizer
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
	});

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			<Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
				{pets.map((pet, id) => (
					<Col key={id}>
						<Card className="mb-0">
							<div id="pet" className="d-flex justify-content-center">
								<Image src={pet.image_url} fluid="true" rounded="true" />
							</div>
							<Card.Body>
								<Card.Title>{pet.name}</Card.Title>
								<Card.Text>{pet.approximate_location}</Card.Text>
								<Link
									to={`pet/${pet._id}`}
									className="btn btn-light "
								>
									Mas detalles
								</Link>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<Pagination
				count={data.totalPages}
				className="d-flex justify-content-center m-3"
				variant="outlined"
				shape="rounded"
				color="primary"
				onChange={e => handleChangePage(e.target.textContent)}
				page={currentPage + 1}
			>
			</Pagination>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
