import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
	continue = event => {
		event.preventDefault();
		// Process Form (Send Data to API) //
		this.props.nextStep();
	};

	back = event => {
		event.preventDefault();
		this.props.prevStep();
	};

	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Success" />
					<h1>Thank You For Your Submission</h1>
					<p>You Will Recieve An Email With Futher Instructions</p>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;
