import React, { Component } from "react";

class Form extends Component {
	state = { name: "", email: "" };

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
					placeholder="Name"
				/>
				<input
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
					placeholder="Email"
				/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default Form;
