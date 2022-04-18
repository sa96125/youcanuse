import { FETCH_REPOSITORIES, FETCH_LANGUAGES } from '../actions/types';

const INITIAL_STATE = {
	repositories: null,
	languages: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_REPOSITORIES:
			return { ...state, repositories: { ...action.payload } };

		case FETCH_LANGUAGES:
			return { ...state, languages: { ...action.payload } };

		default:
			return state;
	}
};
