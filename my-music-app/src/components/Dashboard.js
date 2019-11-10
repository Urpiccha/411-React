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
			value: 20,
			online: true,
			quality: "Normal",
			user: "user",
			notifications: {
				quality: this.props.qualityNotification
			}
		};
		
	}

	testing = () => {
		console.log(this.state.notifications.quality)
	}

	//possible solution to notifications using class component
	// toggleNotification = msg => {
	// 	let msgIndex = this.state.notifications.indexOf(msg);

	// 	if (this.state.notifications.includes(msg)) {
	// 		this.state.notifications.splice(msgIndex, 1);
	// 	} else {
	// 		this.setState({ notifications: [...this.state.notification, msg] });
	// 	}
	// };
	//Your application is offline. You won't be able to share or stream music to other devices..


	// export default function Dashboard() {

	// 	const useStyles = makeStyles(theme => ({
	// 		root: {
	// 			flexGrow: 1
	// 		},
	// 		paper: {
	// 			height: 140,
	// 			width: 100
	// 		},
	// 		control: {
	// 			padding: theme.spacing(2)
	// 		}
	// 	}));

	// 	const [volumeNotification, qualityNotification, onlineNotification] = useState("")

	

	render(){
		return (
			<div>
				<h1>Welcome User!</h1>
				<NavBar />
				<MasterVolumeCard />
				<SoundQuality />
				<OnlineMode />
				<button onClick={() => this.testing()}>Test</button>
				<div><h1>System Notifications</h1>
				</div>
			</div>
		);
	}
}