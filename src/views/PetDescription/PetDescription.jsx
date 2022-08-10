import { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Card from "../../../components/Card";
import { useParams } from "react-router-dom";
import { getPet } from "../../../services/getPet";
import Loader from "../../../components/Loader";

const PetDescription = () => {
	const [pet, setPet] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { id } = useParams();

	async function fetchData() {
		try {
			const fetch = await getPet(id);
			setPet(fetch.data.pet);
			console.log(fetch.data.pet);
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [id]);

	if (loading) {
		return <Loader />;
	}

	const date = new Date(pet.createdAt);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const dateString = `${day}/${month}/${year}`;

	const date_eat = new Date(pet.updatedAt);
	const day_eat = date_eat.getDate();
	const month_eat = date_eat.getMonth() + 1;
	const year_eat = date_eat.getFullYear();
	const dateString_eat = `${day_eat}/${month_eat}/${year_eat}`;

	return (
		<>
			<Row>
				<Col lg="4" className="col-lg-4">
					<Card>
						<Card.Header>
							<div className="header-title">
								<h4 className="card-title">Detalles</h4>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="text-center">
								<div className="user-profile">
									<Image src={pet.image_url} fluid="true" rounded="true" />
								</div>
								<div className="mt-3">
									<h3 className="d-inline-block">{pet.name} </h3>
									<br />
									<p className="d-inline-block pl-3"> Apodo</p>
									<p className="mb-0">
										{pet.description}
									</p>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg="8">
					<Card>
						<Card.Header>
							<div className="header-title">
								<h4 className="card-title">Acerca de {pet.name}</h4>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="user-bio">
								<p>
									{pet.history}
								</p>
							</div>
							<div className="mt-2">
								<h6 className="mb-1">Especie:</h6>
								<p>{pet.type === "Dog" ? "Perro" : "Gato"}</p>
							</div>
							<div className="mt-2">
								<h6 className="mb-1">Genero:</h6>
								<p>{pet.gender === "female" ? "Hembra" : "Macho"}</p>
							</div>
							<div className="mt-2">
								<h6 className="mb-1">Se registró:</h6>
								<p>{dateString}</p>
							</div>
							<div className="mt-2">
								<h6 className="mb-1">Ubicación aproximada:</h6>
								<p>{pet.approximate_location}</p>
							</div>
							<div className="mt-2">
								<h6 className="mb-1">Estado de adopción:</h6>
								<p>{pet.adoption_status ? "No adoptado/a" : "Adoptado/a" }</p>
							</div>
							<div className="mt-2">
								<h6 className="mb-1">Ultimo registro de alimento:</h6>
								<p>{dateString_eat}</p>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg="12">
					<Card>
						<Card.Header>
							<div className="header-title">
								<h4 className="card-title">Galeria</h4>
							</div>
						</Card.Header>
						<Card.Body></Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default PetDescription;
