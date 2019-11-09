import React, {Component} from "react";
import NavBar from "./NavBar";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQuality from "./Card3-Sound Quality";

export default class Dashboard extends Component {
	state = {
		value: 20,
		online: true,
		quality: "Normal",
		user: "user"
	};

	

	render(){
		
	return <div>
				<NavBar/>
				<MasterVolumeCard/>
				<SoundQuality/>
				
			</div>;
	}
}
