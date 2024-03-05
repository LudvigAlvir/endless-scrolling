import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Info() {
	const { id } = useParams();
	const [data, setData] = useState();

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
			const data = await res.json();
			console.log(data);
			setData(data);
		}
		fetchData();
	}, [id]);
	return (
		<div className="fixed">
			<h2>Pokemon ID: {id}</h2>
			{data ? <img src={data.sprites.front_shiny} /> : ""}
		</div>
	);
}
