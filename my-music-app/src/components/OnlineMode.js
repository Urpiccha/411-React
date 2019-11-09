import React from "react";
import ReactDOM from "react-dom";
import Switch from "react-switch";
import Grid from "@material-ui/core/Grid";

class OnlineMode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(checked) {
		this.setState({ checked });
	}
	render() {
		return (
			<div>
				<h2>Online/Offline Mode</h2>
				<Switch
					className="online-switch"
					onChange={this.handleChange}
					checked={this.state.checked}
				/>
				<p>
					You are <b>{this.state.checked ? "Online" : "Offline"}</b>
				</p>
			</div>
		);
	}
}

export default OnlineMode;
