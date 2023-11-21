import {
	Card,
	Table,
	TableRow,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableBody,
	Title,
	Badge,
} from "@tremor/react";
import { DeleteIcon, EditIcon } from "./Icones";
import { useAppSelector } from "../hook/store";
import { useUserAction } from "../hook/useUserAction";
import Modal from "./ModalUpdateUser";

export const ListOfUser = () => {
	const users = useAppSelector((state) => state.users.users) || [];
	const modalstate = useAppSelector((state) => state.modal);
	const { handleRemoveUser, handleSelectedUser } = useUserAction();

	return (
		<div className="flex justify-center item-center mt-4">
			<Card className="w-4/5">
				<Title className="text-blue-500">Usuarios</Title>{" "}
				<Badge color={"red"}>{users.length}</Badge>

				<Table>
					<TableHead>
						<TableRow>
							<TableHeaderCell>Name</TableHeaderCell>
							<TableHeaderCell className="text-right">ID</TableHeaderCell>
							<TableHeaderCell className="text-right">EMAIL</TableHeaderCell>
							<TableHeaderCell className="text-right">GITHUB</TableHeaderCell>
							<TableHeaderCell className="text-right">ACCIONES</TableHeaderCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((item) => (
							<TableRow key={item.name}>
								<TableCell>{item.name}</TableCell>
								<TableCell className="text-right">{item.id}</TableCell>
								<TableCell className="text-right">{item.name}</TableCell>
								<TableCell className="text-right">{item.email}</TableCell>
								<TableCell className="text-right">{item.github}</TableCell>
								<TableCell className="text-right">
									<button
										type="button"
										onClick={() => handleSelectedUser(item)}
										className="hover:shadow hover:bg-blue-100 hover:animate-bounce rounded-full"
									>
										<EditIcon />
									</button>
									<button
										className="hover:shadow hover:bg-red-100 hover:animate-bounce rounded-full"
										type="button"
										onClick={() => handleRemoveUser(item.id)}
									>
										<DeleteIcon />
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
			{modalstate && <Modal />}
		</div>
	);
};
