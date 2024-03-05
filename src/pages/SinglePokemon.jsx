import { useParams } from "react-router-dom";

export function SinglePokemon() {
	const { id } = useParams();

	return <h1>{id}</h1>;
}
