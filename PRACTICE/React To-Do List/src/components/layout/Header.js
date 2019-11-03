import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header style={headerStyle}>
			<h1>To Do List</h1>
			<Link style={linkStyle} to="/">
				Home
			</Link>{" "}
			|{" "}
			<Link style={linkStyle} to="/about">
				Aboot
			</Link>
		</header>
	);
}

const headerStyle = {
	background: "black",
	color: "yellow",
	textAlign: "center",
	padding: "10px"
};

const linkStyle = {
	color: "cyan",
	textDecoration: "none"
};

export default Header;
