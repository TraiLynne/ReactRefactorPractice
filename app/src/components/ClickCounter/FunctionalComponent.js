import { useState } from "react";

const ReClickCounter = () => {
	// State
	const [count, setCount] = useState(0);

	// Event Handler
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>Button Clicked: {count} times</h1>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default ReClickCounter;

/*
Hiccup(s)

At first I was not getting the update to the state. I was trying `counter++` instead of counter + 1
*/
