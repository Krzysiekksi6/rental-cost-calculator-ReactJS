import React from 'react';
import classes from './Input.module.css';
const Input = ({
	id,
	name,
	label,
	register,
	errors,
	required,
	type,
	validationSchema,
	placeholder,
	readonly,
	value,
	onClick,
}) => {
	return (
		<div
			className={`${classes.control} ${
				(errors && errors[name]?.type === 'required') ||
				(errors && errors[name]?.type === 'minLength')
					? classes.invalid
					: ''
			}`}>
			<label htmlFor={name}>
				{label}
				{required && <span className={classes.char}>*</span>}
			</label>
			<input
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				type={type}
				onClick={onClick}
				readOnly={readonly}
				{...register(name, validationSchema)}
			/>

			{errors && errors[name]?.type === 'required' && (
				<span className={classes.invalid}>{errors[name]?.message}</span>
			)}
			{errors && errors[name]?.type === 'minLength' && (
				<span className={classes.invalid}>{errors[name]?.message}</span>
			)}
			{errors &&
				(errors[name]?.type === 'min' || errors[name]?.type === 'max') && (
					<span className={classes.invalid}>{errors[name]?.message}</span>
				)}

			{errors && errors[name]?.type === 'validate' && (
				<span className={classes.invalid}>
					You're too young for premium car! {errors[name]?.message}
				</span>
			)}
		</div>
	);
};

export default Input;
