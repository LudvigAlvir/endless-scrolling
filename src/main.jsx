import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pages/Error.jsx";
import "./index.css";
import { Home } from "./pages/Home.jsx";
import { Partial } from "./pages/Partial.jsx";
import Info from "./components/Info/Info.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
		children: [
			{
				path: ":name",
				element: <Partial />,
			},
		],
	},
	{
		path: "/test",
		element: <h1>Test</h1>,
	},
	{
		path: "/pokemon",
		element: <App />,
		children: [{ path: ":id", element: <Info /> }],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
