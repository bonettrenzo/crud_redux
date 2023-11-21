import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/slice";
import modalReducer from "./modal/slice";
import { percistanceLocalStorageMiddleware } from "../middleware/percistanceLocalStorageMiddleware";
import { syncWithDatabaseMiddleware } from "../middleware/syncWithDatabaseMiddleware";

export const store = configureStore({
	reducer: {
		users: userReducer,
		modal: modalReducer,
	},
	middleware: [percistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
