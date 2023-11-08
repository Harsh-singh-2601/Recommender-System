import { useContext } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Router>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Login />} />
				<Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
				<Route
					path="register"
					element={user ? <Navigate to="/" /> : <Register />}
				/>
				{/* For unknown routes redirect to '/' */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

export default App;
