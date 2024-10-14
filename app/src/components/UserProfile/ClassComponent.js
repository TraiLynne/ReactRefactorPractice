import React, { Component } from "react";

class UserProfile extends Component {
	state = { user: null };

	componentDidMount() {
		// Simulate fetching user data
		const userData = { name: "John Doe", age: 30 };
		this.setState({ user: userData });
	}

	render() {
		const { user } = this.state;
		return (
			<div>
				{user ? (
					<div>
						<h1>{user.name}</h1>
						<p>Age: {user.age}</p>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</div>
		);
	}
}

export default UserProfile;
