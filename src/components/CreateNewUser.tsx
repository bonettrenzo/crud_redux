import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserAction } from "../hook/useUserAction";

export const CreateNewUser = () => {
	const { handleAddUser } = useUserAction();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		handleAddUser({ name, email, github });
		form.reset();
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ marginTop: "15px", width: "80%" }}>
				<Title className="text-blue-500">Crear Nuevo Usuario</Title>
				<form onSubmit={handleSubmit}>
					<TextInput name="name" placeholder="aquí el nombre" type="text" />
					<TextInput name="email" placeholder="aquí el email" type="email" />
					<TextInput
						name="github"
						placeholder="aquí el usuario de github"
						type="text"
					/>

					<div>
						<Button type="submit" style={{ marginTop: "16px" }}>
							{" "}
							Crear usuario{" "}
						</Button>
					</div>
				</form>
			</Card>
		</div>
	);
};
