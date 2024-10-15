import { useState } from "react";

const ReForm = () => {
	// State
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.table({ name, email });
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				name="name"
				value={name}
				onChange={(e) => handleNameChange(e)}
				placeholder="Name"
			/>
			<input
				type="email"
				name="email"
				value={email}
				onChange={(e) => handleEmailChange(e)}
				placeholder="Email"
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ReForm;
