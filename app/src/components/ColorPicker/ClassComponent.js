import React, { Component } from "react";

class ColorPicker extends Component {
	state = { color: "red" };

	changeColor = (newColor) => {
		this.setState({ color: newColor });
	};

	render() {
		return (
			<div>
				<h1 style={{ color: this.state.color }}>This is {this.state.color}</h1>
				<button onClick={() => this.changeColor("blue")}>Blue</button>
				<button onClick={() => this.changeColor("green")}>Green</button>
			</div>
		);
	}
}

export default ColorPicker;
