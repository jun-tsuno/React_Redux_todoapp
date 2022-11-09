import React, { useState } from "react";
import InputBar from "./InputBar";
import TaskList from "./TaskList";

const App = () => {
	// const [task, setTask] = useState([]);

	// const addTask = (term) => {
	// 	setTask([...task, { task: term, isDone: false }]);
	// };

	// const deleteTask = (id) => {
	// 	const newTaskArr = [...task];
	// 	newTaskArr.splice(id, 1);
	// 	setTask([...newTaskArr]);
	// };

	// const doneTask = (id) => {
	// 	const newTaskArr = [...task];
	// 	const isDoneTask = newTaskArr[id];
	// 	isDoneTask.isDone = !isDoneTask.isDone;
	// };

	return (
		<div>
			<InputBar />
			<TaskList />
		</div>
	);
};

export default App;
