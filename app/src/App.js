import React from "react";
import { classComponents, functionalComponents } from "./components";

function App() {
	return (
		<div className="App">
			<div style={{ width: "49%", float: "left" }}>
				<h1>Class Components</h1>
				<classComponents.ClickCounter />
				<classComponents.ColorPicker />
				<classComponents.Counter />
				<classComponents.Form />
				<classComponents.ListDisplay />
				<classComponents.Message />
				<classComponents.TodoList />
				<classComponents.Toggle />
				<classComponents.UserProfile />
				<classComponents.Weather />
			</div>
			<div style={{ width: "49%", float: "left" }}>
				<h1>Functional Components</h1>
				<functionalComponents.ReClickCounter />
				<functionalComponents.ReColorPicker />
				<functionalComponents.ReCounter />
				<functionalComponents.ReForm />
				<functionalComponents.ReListDisplay />
				<functionalComponents.ReMessage />
				<functionalComponents.ReTodoList />
				<functionalComponents.ReToggle />
				<functionalComponents.ReUserProfile />
				<functionalComponents.ReWeather />
			</div>
		</div>
	);
}

export default App;
