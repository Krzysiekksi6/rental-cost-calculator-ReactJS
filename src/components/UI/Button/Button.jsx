import React from 'react';
import classes from './Button.module.css';
const Button = (props) => {
	return (
		<button
			className={`${classes.button} ${props.className}`}
			type={props.type}
			onClick={props.onClick}
            disabled={props.disabled}
			tabIndex={props.tabIndex ? props.tabIndex : 0}>
			{props.children}
		</button>
	);
};

export default Button;
