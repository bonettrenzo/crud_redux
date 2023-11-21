import {
	User,
	UserId,
	UserWithId,
	addNewUser,
	deleteUserById,
	setSelectedUser,
	updateUser,
} from "../store/users/slice";
import { useAppDispatch } from "./store";
import { useModal } from "./useModal";
import { toast } from "sonner";

export const useUserAction = () => {
	const { handleSetModalState } = useModal();
	const dispatch = useAppDispatch();

	const handleAddUser = ({ name, email, github }: User) => {
		dispatch(addNewUser({ name, email, github }));
	};

	const handleRemoveUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	const handleSelectedUser = (user: UserWithId) => {
		dispatch(setSelectedUser(user));
		handleSetModalState(true);
	};

	const handleUpdateUser = (user: UserWithId) => {
		dispatch(updateUser(user));
		handleSetModalState(false);
		toast.success("Usuario actualizado");
	};

	return {
		handleAddUser,
		handleRemoveUser,
		handleSelectedUser,
		handleUpdateUser,
	};
};
