import axios from 'axios';
import queryToStr from 'query-string';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItemFromStorage, storeItem } from '../helpers/localStorage';
import { signIn, signOut, fetchReposAndLangs } from '../store/actions';
import { GITHUB_URL, GITHUB_CLIENT_CONFIG } from '../constants';

// TODO, apollo 연동해서 수정.
const useOauth = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (getItemFromStorage('jwt')) {
			getGithubUser(getItemFromStorage('jwt'));
		} else {
			dispatch(signOut());
			const authorizationCode = queryToStr.parse(location.search).code;
			if (authorizationCode) {
				getAccessToken(authorizationCode);
			}
		}
	}, []);

	const getAccessToken = async code => {
		try {
			const { client_id, client_secret } = GITHUB_CLIENT_CONFIG;

			const response = await axios({
				method: 'post',
				url: GITHUB_URL.access,
				headers: {
					accept: 'application/json',
				},
				data: {
					client_id,
					client_secret,
					code,
				},
			});

			if (response.statusText === 'OK') {
				window.history.pushState(null, null, '/');
				storeItem('jwt', response.data.access_token);
				getGithubUser(response.data.access_token);
			}
		} catch (error) {
			console.warn('your token is expired.');
			console.error(error);
		}
	};

	const getGithubUser = async token => {
		try {
			const response = await axios({
				method: 'get',
				url: GITHUB_URL.user,
				headers: {
					authorization: `token ${token}`,
					Accept: 'application/json',
				},
			});

			if (response.statusText === 'OK') {
				const { login, name, location, email, repos_url } = response.data;
				dispatch(
					signIn({
						userId: login,
						name,
						location,
						email,
					})
				);
				dispatch(fetchReposAndLangs(repos_url));
			}
		} catch (error) {
			console.warn('Could not find user information.');
			console.error(error);
		}
	};
};

export default useOauth;
