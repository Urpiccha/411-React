import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({

	card: {
		minWidth: 275
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	button: {
		display: "block",
		marginTop: theme.spacing(2)
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));


export default function SoundQuality() {
	const classes = useStyles();
	const [SoundQuality, setSoundQuality] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const handleChange = event => {
		SoundQuality(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		
		<Card className={classes.card}>
			<CardContent>
				<div>

					<Typography>
						<h2> Sound Quality </h2>
					</Typography>

					<Typography>
						Manually control music quality in event of poor connection.
					</Typography>

					<FormControl className={classes.formControl}>
						<Select
							open={open}
							onClose={handleClose}
							onOpen={handleOpen}
							value={setSoundQuality}
							onChange={setSoundQuality}
							onChange={handleChange}
						>
							<MenuItem value={'Low'}>Low</MenuItem>
							<MenuItem value={'Normal'}>Normal</MenuItem>
							<MenuItem value={'High'}>High</MenuItem>
						</Select>
					</FormControl>
				</div>{" "}
			</CardContent>{" "}
		</Card>
	);
}
