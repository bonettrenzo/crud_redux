import { Toaster } from "sonner";
import { CreateNewUser } from "./components/CreateNewUser";
import { ListOfUser } from "./components/ListOfUser";
import Header from "./components/Header";
function App() {
	return (
		<>
			<Header />
			<ListOfUser />
			<CreateNewUser />
			<Toaster richColors />
		</>
	);
}

export default App;
