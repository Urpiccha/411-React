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
			user: "user",
			mute: false,
			previousVolume: 40,
			volumeNotification: false,
			notifications: []

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
		let newValue = this.state.online
		this.setState({online: !newValue})
		const message = "Your application is offline! You won't be able to share or stream music to other devices."
		this.toggleNotification( message );
	}

	muteVolume = (value, event) => {
		let newMute = !this.state.mute
		this.setState({
		  mute: newMute,
		  previousVolume: this.state.volume,
		  volume: (newMute ? 0 : this.state.previousVolume)
		})
	  };

	SoundQuality = (event) => {
		this.setState({quality: event.target.value});
		const message = "The music quality is degraded. Increase the quality if you want to better sounding music."
	}
	  
	handleVolumeChange = (event, newValue) => {
		this.setState({volume: newValue})
		if(this.state.volume >= 80){
			const message = "Listening to a high volume over long periods of time can cause irreversable hearing damage."
			this.toggleNotification( message );
		}
	}

	render(){
		return (
			<div>
				<h1>Welcome User!</h1>
				<NavBar />
				<MasterVolumeCard 
					volumeState={this.state.volume}
					volumeChange={this.handleVolumeChange}
					muteVolume={this.muteVolume}
					mute={this.state.mute}>
				</MasterVolumeCard>
				<SoundQuality />
				<OnlineMode 
					checked={this.state.online}
					handleChange={this.toggleOnline}>
				</OnlineMode>
				<div><h1>System Notifications</h1>
				</div>
			</div>
		);
	}
}