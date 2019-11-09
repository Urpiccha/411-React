import React from "react";
import NavBar from "./NavBar";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQuality from "./Card3-Sound Quality";

function Dashboard() {
	return <div>
			<NavBar/>
			<MasterVolumeCard/>
			<SoundQuality/>
		</div>;
}

export default Dashboard;
