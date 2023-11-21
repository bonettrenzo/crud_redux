import { modalState } from "../store/modal/slice";
import { useAppDispatch } from "./store";
import { setModalState } from "../store/modal/slice";

export const useModal = () => {
	const dispatch = useAppDispatch();

	const handleSetModalState = (newState: modalState) => {
		dispatch(setModalState(newState));
	};

	return { handleSetModalState };
};
