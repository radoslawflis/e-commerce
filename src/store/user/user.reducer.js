import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
	currentUser: null,
};

export const userSlice = createSlice({
	name: 'user', //name spaces actions for us; createSlice not only creates reducers but also actions and action types
	initialState: INITIAL_STATE,
	reducers: {
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
	},
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
