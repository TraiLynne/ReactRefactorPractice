import { useState } from "react";

const ReMessage = () => {
	// State
	const [message] = useState("Hello, World!");

	return <h1>{message}</h1>;
};

export default ReMessage;
