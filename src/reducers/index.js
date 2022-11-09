import { combineReducers } from "redux";

const termReducer = (term = "", action) => {
	switch (action.type) {
		case "SET_TERM":
			return {
				term: action.payload,
			};

		default:
			return term;
	}
};

const taskReducer = (task = [{ task: "walk", isDone: false }], action) => {
	switch (action.type) {
		case "ADD_TASK":
			console.log(action.payload);
			return {
				task: [...task, action.payload],
			};

		case "DELETE_TASK":
			const newTaskArr = [...task];
			const deleteId = action.payload;
			newTaskArr.splice(deleteId, 1);
			return {
				task: [...newTaskArr],
			};

		case "DONE_TASK":
			const newTaskArr2 = [...task];
			const doneId = action.payload;
			const isDoneTask = newTaskArr2[doneId];
			isDoneTask.isDone = !isDoneTask.isDone;
			return {
				task: [...newTaskArr2],
			};

		default:
			return task;
	}
};

export default combineReducers({
	term: termReducer,
	tasks: taskReducer,
});
