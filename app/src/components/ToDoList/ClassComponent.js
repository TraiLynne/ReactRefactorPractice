import React, { Component } from "react";

class TodoList extends Component {
	state = { todos: [], newTodo: "" };

	handleChange = (e) => {
		this.setState({ newTodo: e.target.value });
	};

	addTodo = () => {
		this.setState((prevState) => ({
			todos: [...prevState.todos, prevState.newTodo],
			newTodo: "",
		}));
	};

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.newTodo}
					onChange={this.handleChange}
				/>
				<button onClick={this.addTodo}>Add Todo</button>
				<ul>
					{this.state.todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default TodoList;
