import { useState } from 'react';

export const Checkbox = () => {
	const [checked, setChecked] = useState(false);
  return <div>
	<input type="checkbox" checked={false} onChange={() => {}}/>
	</div>

}