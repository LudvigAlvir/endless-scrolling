import { useState, useEffect, Children } from "react";
import { PokeList } from "./components/PokeList/PokeList";
import { PokeListEndless } from "./components/PokeList/PokeListEndless";
import "./App.css";

function App() {
	function toTop() {
		window.scrollTo(0, 0);
	}

	return (
		<main>
			<h1>Pokemon api</h1>
			<div className="to-top">
				<button onClick={toTop}>Back to top</button>
			</div>

			<PokeListEndless />
		</main>
	);
}

export default App;
