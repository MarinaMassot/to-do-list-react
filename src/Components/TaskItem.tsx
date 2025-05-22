import { Checkbox } from "./Checkbox";

export const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {

	return (
		<>
		<li>
			<div>
			<Checkbox
				checked={task.completed}
				onChange={() => onToggleComplete(task.id)}
			/>
			<span>{task.text}</span>
			</div>
			<button onClick={() => onDeleteTask(task.id)}>Delete</button>
		</li>
		</>
	);
};
