import React from 'react';
import classes from './Content.module.css';
import CalculationSummary from '../Calculation/CalculationSummary';
import AvalibleCars from '../../Cars/AvalibleCars';
const Content = () => {
	return (
			<main className={classes.content}>
				<CalculationSummary />
				<AvalibleCars />
			</main>
	);
};

export default Content;
