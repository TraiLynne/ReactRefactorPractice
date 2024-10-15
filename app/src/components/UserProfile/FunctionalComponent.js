import { useEffect, useState } from "react";

const ReUserProfile = () => {
	const [user, setUser] = useState(null);
	const userData = { name: "John Doe", age: 30 };

	useEffect(() => {
		console.log("Fetching Data");
		setTimeout(() => {
			console.log("Done");
			setUser(userData);
		}, 3000);
	}, []);

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
};

export default ReUserProfile;

// I wasn't really seeing the effect so I added a timer
