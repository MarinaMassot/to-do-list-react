import { useState } from "react";

export const Form = (AddTask) => {
	const [taskText, setTaskText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskText.trim()) {
			AddTask(taskText);
			setTaskText("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
			<input type="text" placeholder="Add a new task" />
			<button type="submit">Add</button>
			<button type="submit">Delete</button>
			</div>
		</form>
	);
};

