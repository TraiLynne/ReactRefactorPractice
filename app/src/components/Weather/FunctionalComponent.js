import { useEffect, useState } from "react";

const ReWeather = () => {
	const [temp, setTemp] = useState(null);

	useEffect(() => {
		console.log("Fetching Data");
		setTimeout(() => {
			console.log("Done");
			setTemp(78);
		}, 3000);
	}, []);

	return (
		<div>
			<h1>Current Temperature: {temp ? `${temp}°F` : "Loading..."}</h1>
		</div>
	);
};

export default ReWeather;
