import React from 'react';
import classes from './Checkbox.module.css';
const Checkbox = ({
	id,
	name,
	label,
	register,
	errors,
	checked,
	required,
	onChange,
	...props
}) => {
	
	return (
		<div className={classes['checkbox-wrapper']}>
			<label>
				<input
					id={id}
					name={name}
					className={checked ? classes.checked : ''}
					type='checkbox'
					{...field}
					checked={checked}
					{...register(name, { required: true })}
					errors={errors}
					onChange={onChange}
					{...props}
				/>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
