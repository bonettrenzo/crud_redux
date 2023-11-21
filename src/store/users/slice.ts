import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reduxState } from "../../const";

export type UserId = string | undefined;

export interface User {
	name: string | undefined;
	email: string | undefined;
	github: string | undefined;
}

export interface UserWithId extends Partial<User> {
	id: UserId;
}

const DEFAULT_STATE: UserWithId[] = [
	{
		id: "1",
		name: "Yazman Rodriguez",
		email: "yazmanito@gmail.com",
		github: "yazmanito",
	},
	{
		id: "2",
		name: "John Doe",
		email: "leo@gmail.com",
		github: "leo",
	},
	{
		id: "3",
		name: "Haakon Dahlberg",
		email: "haakon@gmail.com",
		github: "midudev",
	},
];

interface UsersState {
	users: UserWithId[];
	selectedUser?: UserWithId;
}

const initialState: UsersState = (() => {
	const persistedState = window.localStorage.getItem(reduxState);
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}
	return { users: DEFAULT_STATE };
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.users.push({ id, ...action.payload });
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			state.users = state.users.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlready = state.users.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlready) {
				state.users.push(action.payload);
			}
		},
		setSelectedUser: (state, action: PayloadAction<UserWithId>) => {
			state.selectedUser = action.payload;
		},
		updateUser: (state, action: PayloadAction<UserWithId>) => {
			const newUpdateUser = action.payload;
			const userIndex = state.users.findIndex(
				(user) => user.id === newUpdateUser.id,
			);

			if (userIndex !== -1) {
				state.users[userIndex] = newUpdateUser;
			}
		},
	},
});

export default usersSlice.reducer;
export const {
	addNewUser,
	deleteUserById,
	rollbackUser,
	setSelectedUser,
	updateUser,
} = usersSlice.actions;
