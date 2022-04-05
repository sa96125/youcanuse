import styled from 'styled-components';

export const Container = styled.header`
	${prop => prop.theme.responsiveContainer}
`;

export const Title = styled.h1`
	font-size: 4rem;
	font-weight: 500;
	margin: 0 auto;
	text-shadow: 2px 1px 1px rgb(224, 219, 219);
	height: 50vh;
	margin: 0 auto;
`;
