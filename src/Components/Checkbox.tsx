import { useState, type ChangeEvent } from "react";

export const Checkbox = () => {
	const [checked, setChecked] = useState(false);
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<div>
			<input type="checkbox" checked={checked} onChange={onChange} />
		</div>
	);
};
