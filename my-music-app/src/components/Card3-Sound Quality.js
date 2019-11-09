import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
					<Button className={classes.button} onClick={handleOpen}>
						Open the select
					</Button>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-controlled-open-select-label">
							Sound Quality
						</InputLabel>
						<Select
							labelId="demo-controlled-open-select-label"
							id="demo-controlled-open-select"
							open={open}
							onClose={handleClose}
							onOpen={handleOpen}
							value={SoundQuality}
							onChange={handleChange}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Low</MenuItem>
							<MenuItem value={20}>Normal</MenuItem>
							<MenuItem value={30}>High</MenuItem>
						</Select>
					</FormControl>
				</div>{" "}
			</CardContent>{" "}
			<CardActions>
				<Button size="small">Learn More</Button>{" "}
			</CardActions>{" "}
		</Card>
	);
}

// Controlled Open Select

// export default function SoundQuality() {
// //   const classes = useStyles();
// //   const [SoundQuality, setSoundQuality] = React.useState('');
// //   const [open, setOpen] = React.useState(false);

//   const handleChange = event => {
//     SoundQuality(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
// <div>
//   <Button className={classes.button} onClick={handleOpen}>
//     Open the select
//   </Button>
//   <FormControl className={classes.formControl}>
//     <InputLabel id="demo-controlled-open-select-label">Sound Quality</InputLabel>
//     <Select
//       labelId="demo-controlled-open-select-label"
//       id="demo-controlled-open-select"
//       open={open}
//       onClose={handleClose}
//       onOpen={handleOpen}
//       value={SoundQuality}
//       onChange={handleChange}
//     >
//       <MenuItem value="">
//         <em>None</em>
//       </MenuItem>
//       <MenuItem value={10}>Low</MenuItem>
//       <MenuItem value={20}>Normal</MenuItem>
//       <MenuItem value={30}>High</MenuItem>
//     </Select>
//   </FormControl>
// </div>
//   );
// }
