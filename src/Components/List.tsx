import { TaskItem } from "./TaskItem";

export const List = ({ tasks, onToggleComplete, onDeleteTask }) => {
	return (
		<div>
			{tasks.length === 0 ? (
				<p>It's seems like you have nothing to do today : enjoy 🦊 </p>
			) : (
				<ul>
					{tasks.map((task) => (
						<TaskItem
							key={task.id}
							task={task}
							onToggleComplete={onToggleComplete}
							onDeleteTask={onDeleteTask}
						/>
					))}
				</ul>
			)}
		</div>
	);
};
