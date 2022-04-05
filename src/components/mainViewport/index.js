import React from 'react';
import SearchForm from '../../components/searchForm';
import { Container, Title } from './style.css';

const TITLE = `You can use Awesome reference in the world.
 Collected 530 free public websites here.
 Thanks to major developers.`;

const MainViewport = () => {
	return (
		<Container>
			<Title>{TITLE}</Title>
			<SearchForm />
		</Container>
	);
};

export default MainViewport;
