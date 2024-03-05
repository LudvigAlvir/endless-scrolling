import { useState } from "react";

export function Pokemon({ pokemon }) {
	function PokemonInfo({ info }) {
		console.log(info.types);
		return (
			<div>
				{info.types.map((types) => {
					console.log(types);
					return (
						<div key={types.type.name}>
							<p>{types.type.name}</p>
							{/* <img src={types.type.url} /> */}
						</div>
					);
				})}
			</div>
		);
	}
	async function fetchData() {
		const res = await fetch(pokemon.url);
		const data = await res.json();
		console.log(data);
		setData(data);
	}

	const [data, setData] = useState(null);
	const arr = pokemon.url.split("/");
	const id = arr[arr.length - 2];
	const src =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
		id +
		".png";
	return (
		<div key={pokemon.name}>
			<p>{pokemon.name}</p>
			<img
				src={src}
				alt={"Image of " + pokemon.name}
			/>
			{data ? (
				<PokemonInfo info={data} />
			) : (
				<p onClick={fetchData}>Show more info</p>
			)}
		</div>
	);
}
