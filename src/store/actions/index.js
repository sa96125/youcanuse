import { SIGN_IN, SIGN_OUT, FETCH_REPOSITORIES, FETCH_LANGUAGES } from './types';
import axios from 'axios';
import _ from 'lodash';

export const signIn = user => {
	return {
		type: SIGN_IN,
		payload: user,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const fetchReposAndLangs = url => async (dispatch, getState) => {
	await dispatch(fetchRepositories(url));

	_.chain(getState().github.repositories)
		.map('languages_url')
		.forEach(url => dispatch(fetchLanguages(url)))
		.value();
};

export const fetchRepositories = url => async dispatch => {
	const response = await axios({
		auth: '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',
		method: 'get',
		url,
	});
	dispatch({ type: FETCH_REPOSITORIES, payload: response.data });
};

export const fetchLanguages = url => async (dispatch, getState) => {
	const response = await axios({
		auth: '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',
		method: 'get',
		url,
	});

	const curr = { ...response.data };
	const prev = { ...getState().github.languages };

	if (!_.isEmpty(curr)) {
		for (let key in prev) {
			if (key in curr) {
				curr[key] += prev[key];
			} else {
				curr[key] = prev[key];
			}
		}

		dispatch({ type: FETCH_LANGUAGES, payload: curr });
	}
};
