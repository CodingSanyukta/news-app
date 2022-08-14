import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../../assets/images/news.png';

const Header = () => {
	return (
		<Container className="bg-trasprent mb-4">
			<Navbar bg="white" expand="lg" className="top-1 rounded">
				<Container>
					<Navbar.Brand href="/" className="mx-2 d-flex align-items-center">
						<Image src={logo} alt="logo" className="img-fluid" width="35" />
						<h5 className="logo-title mx-3">News App</h5>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto mb-2 mb-lg-0 d-flex align-items-center">
							<Nav.Link href="/about" target="_blank" className="">
								Sobre nosotros
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default Header;