import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import NewCard from "../../components/NewCard/NewCard";
import { getNews } from "../../services/getNews";
import { useSearchNews } from "../../hooks/useSearchNews";
import Loader from "../../components/Loader/Loader";
import Pagination from "react-bootstrap/Pagination";

import { bindActionCreators } from "redux";

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
	const [news, setNews] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const { searchNew } = useSearchNews();

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1);
		window.scrollTo(0, 0);
	};

	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1);
		window.scrollTo(0, 0);
	}

	const firstPage = () => {
		setCurrentPage(1);
		window.scrollTo(0, 0);
	}

	const lastPage = () => {
		setCurrentPage((data.totalResults / 10));
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		async function fetchPets() {
			try {
				const fetchNews = await getNews(10, currentPage, searchNew);
				setData(fetchNews.data);
				setNews(fetchNews.data.articles);
				setLoading(false);
				setError(null);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		}

		fetchPets();
	}, [currentPage, searchNew]);

	if (news === "") {
		return <div />;
	} else if (error) {
		return <div>Error: {error}</div>;
	}

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<Row className="row-cols-1 g-4 justify-content-center">
				<Col className="col-lg-10">
					<p className="card">
						<span>
							Está viendo 10 noticias de {data.totalResults} resultados
						</span>{" "}
					</p>
				</Col>
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
				<Pagination className="mb-5 justify-content-center">
					<Pagination.First onClick={firstPage} />
					<Pagination.Prev onClick={handlePrevPage} />
					<Pagination.Item active>{Math.round(currentPage)}</Pagination.Item>
					<Pagination.Next onClick={handleNextPage} />
					<Pagination.Last onClick={lastPage} />
				</Pagination>
			</Row>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
