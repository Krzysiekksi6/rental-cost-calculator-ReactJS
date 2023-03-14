import React from 'react';
import classes from './CalculationSummary.module.css'
const CalculationSummary = () => {
    return (
        <section className={classes.summary}>
			<div className={classes['summary__title']}>
				<h1>Loan Calculator</h1>
			</div>
			<div className={classes['summary__description']}>
				<p>
					Use our loan calculator to calculate payments over the life of your
					loan. Enter your information to see how much your monthly payments
					could be. You can adjust length of loan, down payment and interest
					rate to see how those changes raise or lower your payments.
				</p>
			</div>
		</section>
    );
};

export default CalculationSummary;