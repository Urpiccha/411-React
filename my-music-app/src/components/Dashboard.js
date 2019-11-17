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
	toggleNotification = (alert) => {
		const baseCall = this.state.notifications.indexOf(alert); 

		if (this.state.notifications.includes(alert)) {
			this.state.notifications.splice(baseCall, 1);
		} else {
			this.setState({ notifications: [alert] });
		}
	};

	removeNotification = (alert) => {
		const baseCall = this.state.notifications.indexOf(alert)
		this.state.notification.splice (baseCall, 1)
	}
	//Your application is offline. You won't be able to share or stream music to other devices..

	displayNotification = (alert) => {
		this.setState({notifications: [...this.state.notifications, alert]})
	}

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

	  handleChange = (event, newValue) => {
		  this.setState ({volume: newValue})
		  if(newValue >= 80) {
			  this.setState({volumeNotification: true})
		  }
	  }

	SoundQuality = (event) => {
		this.setState({quality: event.target.value});
		const alert = "The music quality is degraded. Increase the quality if you want to better sounding music."

		if ((event.target.value === 'low') && !this.state.notifications.includes (alert)) {
			this.addNotification (alert)
		}
		if ((event.target.value !== 'low') && this.state.notifications.includes (alert)) {
			this.removeNotification (alert)
		}
	}
	  
	handleVolumeChange = (event, newValue) => {
		this.setState({volume: newValue})
		if(newValue >= 80){
			const message = "Listening to a high volume over long periods of time can cause irreversable hearing damage."
			this.toggleNotification ( message );
		}
	}

	render(){
		return (
			<div>
				<h1>Welcome User!</h1>
				<NavBar />
				<MasterVolumeCard 
					volume={this.state.volume}
					volumeChange={this.handleVolumeChange}
					muteVolume={this.muteVolume}
					mute={this.state.mute}>
				</MasterVolumeCard>
				<SoundQuality 
					SoundQuality={this.handleSoundQuality}>
				</SoundQuality>
				<OnlineMode 
					checked={this.state.online}
					handleChange={this.toggleOnline}>
				</OnlineMode>
				<div><h1>System Notifications</h1>
					<p>{this.state.notifications}</p>
				</div>
			</div>
		);
	}
}