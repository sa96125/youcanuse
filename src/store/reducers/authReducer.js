import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null,
	name: null,
	location: null,
	email: null,
	// 특정 언어의 커밋수, 능력치, 검증
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			return { ...state, isSignedIn: true, ...action.payload };
		case SIGN_OUT:
			return {
				...state,
				isSignedIn: false,
				userId: null,
				name: null,
				location: null,
				email: null,
			};
		default:
			return state;
	}
};
