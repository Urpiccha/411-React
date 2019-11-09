import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import MasterVolumeCard from "./MasterVolumeCard";
import OnlineMode from "./OnlineMode";

function Dashboard() {
	return (
		<div>
			<GridList col={3}>
				<GridTile>
					<MasterVolumeCard />
				</GridTile>
				<br />
				<GridTile>
					<OnlineMode />
				</GridTile>
			</GridList>
		</div>
	);
}
export default Dashboard;
