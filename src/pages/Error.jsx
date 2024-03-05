import { useRouteError } from "react-router-dom";
export function Error() {
	const error = useRouteError();

	return (
		<>
			<h1>Something went wrong</h1>
			<p>{error.statusText || error.message}</p>
		</>
	);
}
