import React from "react";
import Task from "./Task";

const TaskList = ({ taskArr, deleteTask, doneTask }) => {
	const eachTask = taskArr.map((task, index) => {
		return (
			<Task
				task={task}
				key={index}
				id={index}
				deleteTask={deleteTask}
				doneTask={doneTask}
			/>
		);
	});
	return <div>{eachTask}</div>;
};

export default TaskList;
