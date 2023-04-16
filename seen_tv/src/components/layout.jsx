import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import TopBar from './topBar';

function Layout({ child }) {
	return(
		<Container>
			<Row>
				<TopBar />
			</Row>
			<Row>
				<main className='Board'> { child } </main>
			</Row>
		</Container>
	);
};

export default Layout;