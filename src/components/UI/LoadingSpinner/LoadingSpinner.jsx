import React from 'react';
import classes from './LoadingSpinner.module.css';
const LoadingSpinner = () => {
	return (
		<div className={classes.spinner}>
			<div className={classes.spinner__container}></div>
		</div>
	);
};

export default LoadingSpinner;
