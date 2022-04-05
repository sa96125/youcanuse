import styled from 'styled-components';

export const Container = styled.div`
	${prop => prop.theme.responsiveContainer}
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
`;
