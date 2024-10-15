import { useState } from "react";

const ReColorPicker = () => {
	// State
	const [color, setColor] = useState("red");

	const handleClick = (newColor) => {
		setColor(newColor);
	};

	return (
		<div>
			<h1 style={{ color: color }}>This is {color}</h1>
			<button onClick={() => handleClick("red")}>Red</button>
			<button onClick={() => handleClick("orange")}>Orange</button>
			<button onClick={() => handleClick("yellow")}>Yellow</button>
			<button onClick={() => handleClick("green")}>Green</button>
			<button onClick={() => handleClick("blue")}>Blue</button>
			<button onClick={() => handleClick("indigo")}>Indigo</button>
			<button onClick={() => handleClick("violet")}>Violet</button>
		</div>
	);
};

export default ReColorPicker;

/*
Hiccup(s)

At first I was not getting the “Too many re-renders” error.

I was using `onClick={handleClick(var)}` which meant I was setting the state constantly during render.
*/
