import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQuality from "./Card3-Sound Quality";
import OnlineMode from "./OnlineMode";
import Grid from "@material-ui/core/Grid";

export default class Dashboard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			volume: 20,
			online: true,
			quality: "Normal",
			user: "user"
		};
	}

	testing = () => {
		console.log(this.state.notifications.quality)
	}

	//possible solution to notifications using class component
	toggleNotification = msg => {
		let msgIndex = this.state.notifications.indexOf(msg);

		if (this.state.notifications.includes(msg)) {
			this.state.notifications.splice(msgIndex, 1);
		} else {
			this.setState({ notifications: [...this.state.notification, msg] });
		}
	};
	//Your application is offline. You won't be able to share or stream music to other devices..

	toggleOnline = () => {
		newValue = this.state.online
		this.setState({online: !newValue})
		const message = "Your application is offline! You won't be able to share or stream music to other devices."
		this.toggleNotification( message );
	}

	render(){
		return (
			<div>
				<h1>Welcome User!</h1>
				<NavBar />
				<MasterVolumeCard 
					volumeState={this.state.volume}
					volumeFunction={this.volumeSlider}>
				</MasterVolumeCard>
				<SoundQuality />
				<OnlineMode 
					onlineState={this.state.online}
					onlineFunction={this.toggleOnline}>
				</OnlineMode>
				<button onClick={() => this.testing()}>Test</button>
				<div><h1>System Notifications</h1>
				</div>
			</div>
		);
	}
}