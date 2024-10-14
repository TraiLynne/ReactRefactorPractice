import React, { Component } from "react";

class Message extends Component {
	state = { message: "Hello, World!" };

	render() {
		return <h1>{this.state.message}</h1>;
	}
}

export default Message;
