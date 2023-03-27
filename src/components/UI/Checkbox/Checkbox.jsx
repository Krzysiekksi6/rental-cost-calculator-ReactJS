import React, { useState } from 'react';
import classes from './Checkbox.module.css';
const Checkbox = ({ id, label, checked, ...props }) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<div className={classes['checkbox-wrapper']}>
			<label>
				<input
					id={id}
					className={isChecked ? classes.checked : ''}
					type='checkbox'
					checked={isChecked}
					onChange={() => setIsChecked((prev) => !prev)}
					{...props}
				/>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
