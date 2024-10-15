import { useState } from "react";

const ReCounter = () => {
	// State
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	);
};

export default ReCounter;

// I learned my lesson in that `ClickCounter` and also in the `ColorPicker` to avoid that rerender
