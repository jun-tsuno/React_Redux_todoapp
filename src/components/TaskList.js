import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const TaskList = ({ tasks }) => {
	const eachTask = tasks.map((task, index) => {
		return <Task task={task} key={index} id={index} />;
	});
	return <div>{eachTask}</div>;
};

const mapStateToProps = (state) => {
	return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TaskList);
