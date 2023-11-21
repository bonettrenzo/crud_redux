import React from "react";

import { Button, Card, TextInput, Title } from "@tremor/react";
import { useAppSelector } from "../hook/store";
import { useModal } from "../hook/useModal";
import { useUserAction } from "../hook/useUserAction";
import { useForm } from "../hook/useForm";

export default function Modal() {
	const { handleSetModalState } = useModal();
	const userSelect = useAppSelector((state) => state.users.selectedUser);
	const { handleUpdateUser } = useUserAction();

	const { formData, handleChange } = useForm(userSelect);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;

		handleUpdateUser({
			id: formData?.id,
			name: formData?.name,
			email: formData?.email,
			github: formData?.github,
		});

		form.reset();
	};

	return (
		<>
			<Card className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-5/6 my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
							<Title>Actualización de usuario</Title>
						</div>
						{/*body*/}
						<form className="relative p-6 flex-auto" onSubmit={handleSubmit}>
							<TextInput
								name="name"
								value={formData?.name}
								placeholder="aquí el nombre"
								onChange={(e) => handleChange("name", e.target.value)}
								type="text"
							/>
							<TextInput
								name="email"
								placeholder="aquí el email"
								onChange={(e) => handleChange("email", e.target.value)}
								type="email"
								value={formData?.email}
							/>
							<TextInput
								name="github"
								placeholder="aquí el usuario de github"
								onChange={(e) => handleChange("github", e.target.value)}
								type="text"
								value={formData?.github}
							/>

							{/*footer*/}
							<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
								<Button
									className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={() => handleSetModalState(false)}
									color="red"
								>
									Close
								</Button>
								<Button
									className="active:bg-emerald-600 font-bold uppercase text-sm  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="submit"
									color="blue"
								>
									actualizar usuario
								</Button>
							</div>
						</form>
					</div>
				</div>
			</Card>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"> </div>
		</>
	);
}
