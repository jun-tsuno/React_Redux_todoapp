export const setTerm = (value) => {
	return {
		type: "SET_TERM",
		payload: value,
	};
};

export const addTask = (term) => {
	return {
		type: "ADD_TASK",
		payload: { task: term, isDone: false },
	};
};

export const deleteTask = (id) => {
	return {
		type: "DELETE_TASK",
		payload: id,
	};
};

export const doneTask = (id) => {
	return {
		type: "DONE_TASK",
		payload: id,
	};
};

export const checked = () => {
	return {
		type: "CHECKED",
	};
};
