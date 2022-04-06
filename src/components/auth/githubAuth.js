import React from 'react';
import styled from 'styled-components';
import useOauth from '../../hooks/useOauth';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/actions';
import { removeItemFromStorage } from '../../helpers/localStorage';
import { GITHUB_URL } from '../../constants';
import GITHUB_IMG from '../../assets/github-brands.svg';

const GithubAuth = () => {
	useOauth();
	const isSignedIn = useSelector(state => state.auth.isSignedIn);
	const dispatch = useDispatch();

	const assignToGithub = () => {
		window.location.assign(GITHUB_URL.auth);
	};

	const cleanUpStorage = () => {
		removeItemFromStorage('jwt');
		dispatch(signOut());
	};

	const onSignInClick = () => assignToGithub();
	const onSignOutClick = () => cleanUpStorage();

	return isSignedIn ? (
		<IconContainer>
			<Icon src={GITHUB_IMG} alt="#" onClick={onSignOutClick}></Icon>
		</IconContainer>
	) : (
		<IconContainer>
			<Icon src={GITHUB_IMG} alt="#" onClick={onSignInClick}></Icon>
		</IconContainer>
	);
};

export default GithubAuth;

const IconContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Icon = styled.img`
	width: 24px;
	height: 24px;
`;
