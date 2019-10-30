import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./firstComponent";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			items: []
		};
	}

	// toggle = () => {
	// 	this.setState({ isOn: !this.state.isOn });
	// };

	inputUpdate = event => {
		this.setState({ input: event.target.value });
	};

	formSubmit = event => {
		event.preventDefault();
		console.log("*** THIS IS STATE ***", this.state.items);
		this.setState({
			items: [...this.state.items, this.state.input],
			input: ""
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<form onSubmit={this.formSubmit}>
						<input value={this.state.input} onChange={this.inputUpdate} />
						<button>Submit</button>
					</form>
					<FirstComponent items={this.state.items} />
					<h1>'Ja! oder Nein!'</h1>
				</header>
			</div>
		);
	}
}
export default App;
