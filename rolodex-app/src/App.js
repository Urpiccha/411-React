import { Component } from "react";
import React from "react";
import "./App.css";
import { UserForm } from "./components/UserForm";

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		personInfo: []
	// 	};
	// }

	// click = () => {
	// 	fetch("https://randomuser.me/api?results=25")
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log("*** FETCH DATA ***", data);
	// 			this.setState({ personInfo: data.results });
	// 		});
	// };

	render() {
		return (
			<div className="App">
				<UserForm />
			</div>
		);
	}
}

export default App;
