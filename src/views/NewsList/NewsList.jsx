import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import NewCard from "../../components/NewCard/NewCard";
import { getNews } from "../../services/getNews";
import { useSearchNews } from "../../hooks/useSearchNews";
import Loader from "../../components/Loader/Loader";

import { bindActionCreators } from "redux";

/* import SwiperCore, { Navigation } from "swiper"; */

/* // Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.scss"; */

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

import "./NewsList.scss";

/* // install Swiper modules
SwiperCore.use([Navigation]); */

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

const NewsList = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const { searchNew } = useSearchNews();

	const handleChangePage = (newPage) => {
		setCurrentPage(newPage - 1);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		async function fetchPets() {
			try {
				const fetchNews = await getNews(10, currentPage, "bitcoin");
				setData(fetchNews.data);
				setNews(fetchNews.data.articles);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		}

		fetchPets();
	}, [currentPage, searchNew]);

	/* 	useEffect(() => {
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
	}); */

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			<Row className="row-cols-1 g-4 justify-content-center">
				{news.map((article, id) => (
					<Col key={id} className="col-lg-10">
						<NewCard
							title={article.title}
							description={article.description}
							url={article.url}
							urlToImage={article.urlToImage}
							publishedAt={article.publishedAt}
							source={article.source.name}
						/>
					</Col>
				))}
			</Row>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
