import { useParams } from "react-router-dom";
export function Partial() {
	const { name } = useParams();
	return (
		<>
			<h2>Hello {name}!</h2>
		</>
	);
}
