import React, { Component } from "react";

class Toggle extends Component {
	state = { isToggled: false };

	toggle = () => {
		this.setState((prevState) => ({ isToggled: !prevState.isToggled }));
	};

	render() {
		return (
			<div>
				<button onClick={this.toggle}>
					{this.state.isToggled ? "On" : "Off"}
				</button>
			</div>
		);
	}
}

export default Toggle;
