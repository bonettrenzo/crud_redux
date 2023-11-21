import { Middleware } from "@reduxjs/toolkit";
import { reduxState } from "../const";

export const percistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		window.localStorage.setItem(reduxState, JSON.stringify(store.getState()));
	};
