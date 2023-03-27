import React from 'react';
import 'react-step-progress-bar/styles.css';
import classes from './MultiStepProgressBar.module.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

const MultiStepProgressBar = (props) => {
	return (
		<div className={classes.container}>
			<ProgressBar
			className={classes.progress}
				percent={((props.step - 1) * 100) / 3}
				filledBackground='linear-gradient(to right, #db9f8a, #db6a41)'>
				<Step transition='scale'>
					{({ accomplished, index }) => (
						<div
							className={`${classes.step} ${
								accomplished ? classes.completed : ''
							}`}>
							1
						</div>
					)}
				</Step>
				<Step transition='scale'>
					{({ accomplished, index }) => (
						<div
							className={`${classes.step} ${
								accomplished ? classes.completed : ''
							}`}>
							2
						</div>
					)}
				</Step>
				<Step transition='scale'>
					{({ accomplished, index }) => (
						<div
							className={`${classes.step} ${
								accomplished ? classes.completed : ''
							}`}>
							3
						</div>
					)}
				</Step>
				<Step transition='scale'>
					{({ accomplished, index }) => (
						<div
							className={`${classes.step} ${
								accomplished ? classes.completed__gold : ''
							}`}>
							4
						</div>
					)}
				</Step>
			</ProgressBar>
		</div>
	);
};

export default MultiStepProgressBar;
