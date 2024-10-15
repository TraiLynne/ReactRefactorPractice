import { useState } from "react";

const ReToggle = () => {
	// State
	const [isToggled, setIsToggled] = useState(false);

	// Event Handler
	const handleClick = (e) => {
		e.preventDefault();
		setIsToggled(!isToggled);
	};
	return (
		<div>
			<button onClick={(e) => handleClick(e)}>
				{isToggled ? "On" : "Off"}
			</button>
		</div>
	);
};

export default ReToggle;
