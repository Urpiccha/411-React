import React, { Component } from "react";
import "./App.css";

class NewsListItem extends Component {
	render() {
		return (
			<li>
				<a target="_blank" rel="noopener noreferrer" href={this.props.url}>
					{this.props.title}
				</a>
			</li>
		);
	}
}

export default NewsListItem;
