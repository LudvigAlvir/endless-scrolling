import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Info() {
	const { id } = useParams();
	const arr = useState(null);
	cosnt[(data, setData)] = useState();

	//data = arr[0], setData = arr[1]
	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
			const data = await res.json();
			console.log(data);
			arr[1](data);
		}
		fetchData();
	}, [id]);
	return (
		<div className="fixed">
			<h2>Pokemon ID: {id}</h2>
			{arr[0] ? <img src={arr[0].sprites.front_shiny} /> : ""}
		</div>
	);
}
