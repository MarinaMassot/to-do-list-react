export const Form = () => {
	return (
		<form>
			<input type="text" placeholder="Add a new task" />
			<Button type="submit">Add</Button>
			{/* <Button type="submit">Edit</Button>
			<Button type="submit">Delete</Button> */}
		</form>
	);
};

const Button = ({children, ...props}) => {
	return (
		<button {...props}>
			{children}
		</button>
	);
}