import React from "react";
import Switch from "react-switch";
import Grid from "@material-ui/core/Grid";


const OnlineMode = props => {

	render() {
		return (
			<div className="online-switch">
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
