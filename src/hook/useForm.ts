import { useState } from "react";
import { UserWithId } from "../store/users/slice";

interface FormAction {
	formData: UserWithId | undefined;
	handleChange: (name: string, value: string) => void;
}

export const useForm = (initialState: UserWithId | undefined): FormAction => {
	const [formData, setFormData] = useState<UserWithId | undefined>(
		initialState,
	);

	const handleChange = (name: string, value: string | number) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return {
		formData,
		handleChange,
	};
};
