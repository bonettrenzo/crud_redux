import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type modalState = boolean;

const initialState: modalState = false;

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setModalState: (state, action: PayloadAction<modalState>) => {
			return action.payload;
		},
	},
});

export const { setModalState } = modalSlice.actions;
export default modalSlice.reducer;
