import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	${prop => prop.theme.responsiveContainer}
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	height: 64px;
`;

export const NavContainer = styled.nav`
	text-overflow: ellipsis;
	display: flex;
`;

export const NavItem = styled(Link)`
	color: black;
	margin-right: 1.7rem;
	font-size:1rem;
`;
