import { useState, useEffect } from "react";
import { Pokemon } from "../Pokemon/Pokemon";
import { Outlet } from "react-router-dom";

export function PokeListEndless() {
	const [data, setData] = useState(null);
	const [pokemons, setPokemons] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

	useEffect(() => {
		async function getData() {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
				setPokemons([...pokemons, ...data.results]);
				setLoading(false);

				console.log(data);
			} catch (e) {
				setLoading(false);
				setError(true);
			}
		}
		getData();
	}, [url]);
	function handleScroll(e) {
		/* e.preventDefault();
		e.stopPropagation(); */
		const sY = window.scrollY;
		const dH = document.body.clientHeight;
		const wH = window.innerHeight;
		if (!loading) {
			if (sY > dH - wH - 200) {
				console.log("load more");
				setUrl(data.next);
			}
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	if (error) {
		return <p>error</p>;
	}
	if (loading) {
		return <p>loading</p>;
	}

	return (
		<div className="pokemon-container">
			<div>
				<h2>All pokemon</h2>
				{data ? (
					pokemons.map((pokemon) => (
						<Pokemon
							pokemon={pokemon}
							key={pokemon.name}
						/>
					))
				) : (
					<p>errror</p>
				)}
				{loading && <p>loading</p>}
			</div>
			<div>
				<h2>Info</h2>
				<Outlet />
			</div>
		</div>
	);
}
