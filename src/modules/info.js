import { createAction, handleActions } from 'redux-actions';

const SET_INFO = 'info/SET_INFO';

export const setInfo = createAction(SET_INFO, (info) => info);

const initialState = {
	info: null,
};

const info = handleActions(
	{
		[SET_INFO]: (state, { payload: info }) => ({
			...state,
			info,
		}),
	},
	initialState,
);

export default info;
