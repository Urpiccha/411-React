import { Component } from "react";

export class NewsFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: "",
			errorMsg: "",
			news: []
		};
	}
	getSearchResluts = () => {
		fetch(`http://hn.algolia.com/api/v1/search?query=${}`)
			.then(res => res.json())
			.then(parsedJSON => {
				console.log(parsedJSON);
				this.setState({ news: parsedJSON.hits });
			});
	};

	onChange = event => {
		this.setState({ term: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();
		this.getSearchResults(this.state.term);
	};

	render() {
		return (
			<div>
				<h2>The News</h2>
				<h6>Search for a headline</h6>
				<form onSubmit={this.onSubmit}>
					<input value={this.state.term} onChange={this.onChange} />
					<button>Search</button>
				</form>

				<ul>
					{this.state.news.map(news => {
						return (
							<li>
								<code>{news.title}</code>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default NewsFeed;
