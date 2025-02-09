import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: "hotpink",
			padding: "10px",
			borderBottom: "2px dodgerblue dotted",
			textDecoration: this.props.todo.completed ? "line-through" : "none"
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{" "}
					{title}
					<button
						onClick={this.props.deleteTodo.bind(this, id)}
						style={btnStyle}
					>
						X
					</button>
				</p>
			</div>
		);
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};

const btnStyle = {
	background: "yellow",
	color: "black",
	border: "none",
	padding: "5px 9px",
	borderRadius: "50%",
	cursor: "pointer",
	float: "right"
};

export default TodoItem;
