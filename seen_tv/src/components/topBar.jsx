import { Navbar, Nav } from 'react-bootstrap';

function TopBar(props) {
	return (
		<Navbar bg="dark" variant='dark' expand='lg'>
			<Navbar.Brand>
				Sudoku Solver
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/game'>Game</Nav.Link>
					<Nav.Link href='/login'>Login</Nav.Link>
					<Nav.Link href='/register'>Register</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default TopBar;