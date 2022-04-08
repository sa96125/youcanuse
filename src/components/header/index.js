import React from 'react';
import { Container, NavContainer, NavItem } from './style.css';
import GithubAuth from '../auth/githubAuth';

const Header = () => {
	return (
		<Container>
			<NavContainer>
				<NavItem to="/rank">Community</NavItem>
				<NavItem to="/new">List up</NavItem>
				<GithubAuth />
			</NavContainer>
		</Container>
	);
};

export default Header
