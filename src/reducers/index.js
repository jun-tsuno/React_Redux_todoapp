import { combineReducers } from "redux";

const termReducer = (term = "", action) => {
	switch (action.type) {
		case "SET_TERM":
			return action.payload;

		default:
			return term;
	}
};

const taskReducer = (task = [], action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [...task, action.payload];

		case "DELETE_TASK":
			const newTaskArr = [...task];
			const deleteId = action.payload;
			newTaskArr.splice(deleteId, 1);

			return [...newTaskArr];

		case "DONE_TASK":
			const newTaskArr2 = [...task];
			const doneId = action.payload;
			const isDoneTask = newTaskArr2[doneId];
			isDoneTask.isDone = !isDoneTask.isDone;

			return [...newTaskArr2];

		default:
			return task;
	}
};

const checkedReducer = (checked = false, action) => {
	switch (action.type) {
		case "CHECKED":
			return !checked;

		default:
			return checked;
	}
};

export default combineReducers({
	term: termReducer,
	tasks: taskReducer,
	checked: checkedReducer,
});
