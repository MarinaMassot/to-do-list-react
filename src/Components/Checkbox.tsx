import { useState } from 'react';

export const Checkbox = () => {
	const [checked, setChecked] = useState(false);
	const onChange = (event) => {
		setChecked(event.target.checked);		
	}

  return <div>
	<input type="checkbox" checked={checked} onChange={onChange}/>
	</div>

}