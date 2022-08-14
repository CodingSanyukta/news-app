import "./NewCard.scss";
import { DateTime } from "luxon";
import { Image, Row, Col } from "react-bootstrap";

const NewCard = (props) => {
	return (
		<div class="card">
			<Row className="row-cols-1 row-cols-md-2 justify-content-between align-items-center">
				<Col className="card-details" >
					<p>{props.source}</p>
					<p class="text-title">{props.title}</p>
					<p class="text-body">{props.description}</p>
					<p class="text-date">
						{DateTime.fromISO(props.publishedAt).toFormat(
							"'Publicado el: ' dd'-'mm'-'y 'a las' HH':'mm 'hs.'"
						)}
					</p>
				</Col>
				<Col className="col-md-4 ">
					<Image src={props.urlToImage} fluid rounded/>
				</Col>
			</Row>
			<button class="card-button">
				<a href={props.url} target="_blank" rel="noopener noreferrer">
					Mas Información
				</a>
			</button>
		</div>
	);
};

export default NewCard;
