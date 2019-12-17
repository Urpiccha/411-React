import React, {Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default class ButtonAppBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			signIn: false
		};

	}

	userSignIn = () => {
			this.setState({
				signIn: true
			})
		}


	classes = () => useStyles();
		
	render(){
		return (
			<div className={this.classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={this.classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={this.classes.title}>
							Get Some!
						</Typography>
					</Toolbar>
				</AppBar>
				{this.state.signIn ? <Dashboard /> : <SignIn signIn={this.userSignIn}/>}
			</div>
		);
	}
};

