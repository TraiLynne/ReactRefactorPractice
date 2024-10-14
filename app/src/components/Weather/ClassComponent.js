import React, { Component } from "react";

class Weather extends Component {
	state = { temperature: null };

	componentDidMount() {
		// Simulate fetching weather data
		this.setState({ temperature: 25 });
	}

	render() {
		return (
			<div>
				<h1>Current Temperature: {this.state.temperature}°C</h1>
			</div>
		);
	}
}

export default Weather;
