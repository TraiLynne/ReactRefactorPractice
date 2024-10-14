import React, { Component } from "react";

class ClickCounter extends Component {
	state = { count: 0 };

	handleClick = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	render() {
		return (
			<div>
				<h1>Button Clicked: {this.state.count} times</h1>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
		);
	}
}

export default ClickCounter;
