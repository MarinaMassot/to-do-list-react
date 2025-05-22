export const Checkbox = ({ checked, onChange }) => {

	return (
		<div>
			<input type="checkbox" checked={checked} onChange={onChange} />
		</div>
	);
};
