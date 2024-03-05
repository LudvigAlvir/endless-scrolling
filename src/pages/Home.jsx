import { Outlet } from "react-router-dom";

export function Home() {
	return (
		<>
			<h1>Home page</h1>
			<div>
				<Outlet />
			</div>
		</>
	);
}
