import { Middleware } from "@reduxjs/toolkit";
import { UserWithId, rollbackUser } from "../store/users/slice";
import { toast } from "sonner";

export const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		//FASE 1
		const { type, payload } = action;
		const previusState = store.getState();

		next(action);

		const previuUser = previusState.users.users.find(
			(user: UserWithId) => user.id === payload,
		);

		// FASE 2
		if (type === "users/deleteUserById") {
			fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok) {
						toast.success(`Usuario eliminado ${payload}`);
					}
				})
				.catch(() => {
					toast.error("Error al borrar el usuario");
					if (previuUser) {
						store.dispatch(rollbackUser(previuUser));
					}
				});
		}
	};
