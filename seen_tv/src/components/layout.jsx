import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import TopBar from './topBar';
import QuoteContainer from './QuoteContainer';

function Layout({ child }) {
	return(
		<Container>
			<Row>
				<TopBar />
			</Row>
			<Row>
				<main className='Board'> { child } </main>
			</Row>
			<Row>
				<QuoteContainer />
			</Row>
		</Container>
	);
};

export default Layout;