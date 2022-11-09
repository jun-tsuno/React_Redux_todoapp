import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const TaskList = ({ tasks }) => {
	console.log(tasks);
	if (!tasks.task) {
		return;
	}
	console.log(tasks);
	const eachTask = tasks.task.map((task, index) => {
		console.log(task);
		return <Task task={task} key={index} id={index} />;
	});
	return <div>{eachTask}</div>;
};

const mapStateToProps = (state) => {
	return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TaskList);
