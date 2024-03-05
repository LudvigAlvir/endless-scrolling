import { useState, useEffect } from "react";
import { Pokemon } from "../Pokemon/Pokemon";
export function PokeList() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
	useEffect(() => {
		setLoading(true);
		async function getData() {
			try {
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				setData(data);
				setLoading(false);
			} catch (e) {
				setLoading(false);
				setError(true);
			}
		}
		getData();
	}, [url]);

	if (error) {
		return <p>error</p>;
	}
	if (loading) {
		return <p>loading</p>;
	}

	return (
		<div>
			{data.previous && (
				<button
					onClick={() => {
						setUrl(data.previous);
					}}>
					Show previous
				</button>
			)}
			{data.next && (
				<button
					onClick={() => {
						setUrl(data.next);
					}}>
					Show next
				</button>
			)}

			{data ? (
				data.results.map((pokemon) => (
					<Pokemon
						pokemon={pokemon}
						key={pokemon.name}
					/>
				))
			) : (
				<p>errror</p>
			)}
			{data.previous && (
				<button
					onClick={() => {
						setUrl(data.previous);
						console.log(data.previous);
					}}>
					Show previous
				</button>
			)}
			{data.next && (
				<button
					onClick={() => {
						setUrl(data.next);
					}}>
					Show next
				</button>
			)}
		</div>
	);
}
