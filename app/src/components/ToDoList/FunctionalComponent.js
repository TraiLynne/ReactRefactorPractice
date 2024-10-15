import { useState } from "react";

const ReTodoList = () => {
	// State
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	// Event Handlers
	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, newTodo]);
		setNewTodo("");
	};

	return (
		<div>
			<input type="text" value={newTodo} onChange={(e) => handleChange(e)} />
			<button onClick={(e) => handleSubmit(e)}>Add Todo</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};

export default ReTodoList;
