import React from "react";
import Switch from "react-switch";
// import Grid from "@material-ui/core/Grid";


const OnlineMode = props => {

		return (
			<div className="online-switch">
				<h2>Online/Offline Mode</h2>
				<Switch
					className="online-switch"
					onChange={props.handleChange}
					checked={props.checked}
				/>
				<p>
					You are <b>{props.checked ? "Online" : "Offline"}</b>
				</p>
			</div>
		);
	}


export default OnlineMode;
