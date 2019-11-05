import React, { Component } from "react";
import "./App.css";
import NewsListItem from "./NewsListItem";

class App extends Component {
	state = {
		stories: []
	};

	componentDidMount() {
		fetch(`http://hn.algolia.com/api/v1/search?query=`).then(data =>
			data.json()
		);
	}
	// .then(data => {
	// 	let formattedData = data.slice(0, 30);
	// 	formattedData.forEach(id => {
	// 		fetch(`http://hn.algolia.com/api/v1/items/${id}.json`)
	// 			.then(newsData => newsData.json())
	// 			.then(newsData => {
	// 				this.setState({ stories: [...this.state.stories, newsData] });
	// 			});
	// 	});
	// });

	renderListItems() {
		return this.state.stories.map((item, index) => {
			return <NewsListItem key={index} title={item.title} url={item.url} />;
		});
	}

	render() {
		return (
			<div>
				<ol>{this.renderListItems}</ol>
			</div>
		);
	}
}

export default App;
