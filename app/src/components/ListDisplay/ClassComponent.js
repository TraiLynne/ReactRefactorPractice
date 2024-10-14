import React, { Component } from "react";

class ListDisplay extends Component {
	state = { items: ["Item 1", "Item 2", "Item 3"] };

	render() {
		return (
			<ul>
				{this.state.items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		);
	}
}

export default ListDisplay;
