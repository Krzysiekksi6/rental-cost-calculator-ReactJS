import React, { useEffect, useState } from 'react';
import classes from './CalculationResults.module.css';

const FUEL_PRICE = 6.98;
const CATEGORY_BASIC = 1;
const CATEGORY_STANDARD = 1.3;
const CATEGORY_MEDIUM = 1.6;
const CATEGORY_PREMIUM = 2;
const MIN_AVAILABLE_CARS = 3;
const VAT_TAX = 1.23;
const DRIVING_LICENSE_LESS_THAN_FIVE_YEARS = 5;

const CalculationResults = (props) => {
	// const [results, setResults] = useState({
	// 	ratePerDay: 0,
	// 	priceAfterDaysIncluded: 0,
	// 	brutto: 0,
	// 	netto: 0,
	// 	totalFuelAmount: 0,
	// });

	// useEffect(() => {
	// 	console.log(props.userData);
	// 	console.log(props.carInfo);
	// 	calculate();
	// }, []);
	// const { firstname, lastName, drivingLicenseYear, kilometers, numberOfDays } =
	// 	props.userData;
	// const {
	// 	id,
	// 	brand,
	// 	model,
	// 	img,
	// 	basePrice: dailyBasePrice,
	// 	avgFuelConsumption,
	// 	amountOfAvaliable,
	// 	category,
	// } = props.carInfo;

	// const calculateCategory = () => {
	// 	let multiplier = 1;
	// 	if (category === 'premium') {
	// 		multiplier *= CATEGORY_PREMIUM;
	// 	} else if (category === 'standard') {
	// 		multiplier *= CATEGORY_STANDARD;
	// 	} else if (category === 'medium') {
	// 		multiplier *= CATEGORY_MEDIUM;
	// 	} else {
	// 		multiplier *= CATEGORY_BASIC;
	// 	}

	// 	return multiplier;
	// };

	// const yearsVerification = () => {
	// 	let multiplier = 1;

	// 	if (+drivingLicenseYear < DRIVING_LICENSE_LESS_THAN_FIVE_YEARS) {
	// 		multiplier *= 1.2;
	// 	}

	// 	if (+amountOfAvaliable < MIN_AVAILABLE_CARS) {
	// 		multiplier *= 1.15;
	// 	}
	// 	return multiplier;
	// };

	// const calculateFuelPrice = () => {
	// 	const summary = ((+kilometers * +avgFuelConsumption) / 100) * FUEL_PRICE;
	// 	return +summary.toFixed(2);
	// };

	// const calculate = () => {
	// 	const basicPrice = +dailyBasePrice * numberOfDays;
	// 	const categoryMuliplier = calculateCategory();
	// 	const drivingLicenseYearMultiplier = yearsVerification();
	// 	const estimatedFuelPrice = calculateFuelPrice();

	// 	const nettoPrice = (
	// 		basicPrice * categoryMuliplier * drivingLicenseYearMultiplier +
	// 		estimatedFuelPrice
	// 	).toFixed(2);
	// 	const bruttoPrice = (nettoPrice * VAT_TAX).toFixed(2);
	// 	setResults({
	// 		ratePerDay: dailyBasePrice,
	// 		priceAfterDaysIncluded: basicPrice,
	// 		brutto: bruttoPrice,
	// 		netto: nettoPrice,
	// 		totalFuelAmount: estimatedFuelPrice,
	// 	});
	// };

	return (
		<div>
			<div>SUMMARY</div>
			<div>MADA</div>
			<div>FAKA</div>
		</div>
		// <section className={classes.results}>
		// 	<div className={classes.column}>
		// 		<p className={classes.heading}>Rate per day:</p>
		// 		<p className={classes.price}>${results.ratePerDay}</p>
		// 		<p className={classes.heading}>{`Rate per ${numberOfDays} day:`}</p>
		// 		<p className={classes.price}>${results.priceAfterDaysIncluded}</p>
		// 		<p className={classes.heading}>Brutto:</p>
		// 		<p className={classes.price}>${results.brutto}</p>
		// 	</div>
		// 	<div className={classes.column}>
		// 		<p className={classes.heading}>Total fuel amount:</p>
		// 		<p className={classes.price}>${results.totalFuelAmount}</p>
		// 		<p className={classes.heading}>Category:</p>
		// 		<p className={classes.category}>{category.toUpperCase()}</p>
		// 		<p className={classes.heading}>Netto:</p>
		// 		<p className={classes.price}>${results.netto}</p>
		// 	</div>
		// </section>
	);
};

export default CalculationResults;
