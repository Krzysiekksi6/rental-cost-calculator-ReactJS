import React, { useEffect, useState, useRef } from 'react';
import MultiStepProgressBar from '../../UI/MultiStepProgressBar/MultiStepProgressBar';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import useInput from '../../../hooks/use-input';
import classes from './CalculationForm.module.css';
import DatePickerForm from './DatePickerForm';
import CalculationResults from './CalculationResults';

const MIN_KILOMETERS = 5;
const MIN_DRIVING_LICENSE_YEAR = 0;

const CalculationForm = (props) => {
	const [tooYoungError, setTooYoungError] = useState(false);
	const [index, setIndex] = useState(1);
	const [days, setDays] = useState(0);
	const refOne = useRef(null);

	useEffect(
		(value) => {
			setDays(value);
		},
		[days]
	);

	useEffect(() => {
		document.addEventListener('keydown', hideOnEscape, true);
		document.addEventListener('click', hideOnClickOutside, true);
	}, []);

	const hideOnEscape = (e) => {
		if (e.key === 'Escape') {
			closeModalHandler();
		}
	};

	const hideOnClickOutside = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			closeModalHandler();
		}
	};

	const [userData, setUserData] = useState({
		firstname: '',
		lastName: '',
		drivingLicenseYear: 0,
		kilometers: 0,
		numberOfDays: 0,
	});

	const prevButtonHandler = () => {
		if (index > 1) {
			setIndex((prevIndex) => prevIndex - 1);
		}
	};

	const nextButtonHandler = () => {
		if (index < 3) {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	const closeModalHandler = () => {
		props.onCloseModal();
	};

	const isNotEmpty = (value) => value.trim() !== '';

	const isGreaterThan = (value, amount) => {
		return value >= amount;
	};
	const validateConfigKilometers = (value) => {
		return isNotEmpty(value) && isGreaterThan(value, MIN_KILOMETERS);
	};

	const validateConfigLicenseYear = (value) => {
		return isNotEmpty(value) && isGreaterThan(value, MIN_DRIVING_LICENSE_YEAR);
	};

	const rentCarTitle = `Your car: ${props.car.brand} ${props.car.model}`;

	const resetInputs = () => {
		resetFirstname();
		resetLastName();
		resetKilometerAmount();
		resetDrivingLicenseYear();
	};

	const {
		value: firstname,
		isValid: firstnameIsValid,
		hasError: firstnameHasError,
		valueChangeHandler: firstnameChangeHandler,
		inputBlurHandler: firstnameBlurHandler,
		reset: resetFirstname,
	} = useInput(isNotEmpty);

	const {
		value: lastName,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName,
	} = useInput(isNotEmpty);

	const {
		value: kilometerAmount,
		isValid: kilometerAmountIsValid,
		hasError: kilometerAmountHasError,
		valueChangeHandler: kilometerAmountChangeHandler,
		inputBlurHandler: kilometerAmountBlurHandler,
		reset: resetKilometerAmount,
	} = useInput(validateConfigKilometers);

	const {
		value: drivingLicenseYear,
		isValid: yearIsValid,
		hasError: yearHasError,
		valueChangeHandler: yearChangeHandler,
		inputBlurHandler: yearBlurHandler,
		reset: resetDrivingLicenseYear,
	} = useInput(validateConfigLicenseYear);

	let formIsValid = false;

	if (
		kilometerAmountIsValid &&
		yearIsValid &&
		firstnameIsValid &&
		lastNameIsValid
	) {
		formIsValid = true;
	}

	const date = new Date();
	const currentYear = date.getFullYear();

	const submitHandler = (e) => {
		e.preventDefault();
		setTooYoungError(false);
		console.log('INDEX', index);
		if (
			props.car.category === 'premium' &&
			currentYear - +drivingLicenseYear < 3
		) {
			setTooYoungError(true);
			return;
		}
		if (index === 1) {
			nextButtonHandler();
			return;
		}
		if (!formIsValid || days === 0) {
			return;
		}
		if (index === 2) {
			setUserData({
				firstname: firstname,
				lastName: lastName,
				drivingLicenseYear: +drivingLicenseYear,
				kilometers: +kilometerAmount,
				numberOfDays: +days,
			});
			console.log(userData);

			resetInputs();
			nextButtonHandler();
			console.log('CLEAR!');
		}
	};

	return (
		<React.Fragment>
			<MultiStepProgressBar step={index} />

			<form 
			ref={refOne}
			className={classes.form} onSubmit={submitHandler}>
				<h3 className={classes.title}>{rentCarTitle}</h3>
				{index === 1 && (
					<div>
						<Input
							label='First name'
							id='firstname'
							type='text'
							value={firstname}
							onChange={firstnameChangeHandler}
							onBlur={firstnameBlurHandler}
						/>
						{firstnameHasError && (
							<p className={classes['error-text']}>Enter correct value...</p>
						)}
						<Input
							label='Last name'
							id='lastName'
							type='text'
							value={lastName}
							onChange={lastNameChangeHandler}
							onBlur={lastNameBlurHandler}
						/>
						{lastNameHasError && (
							<p className={classes['error-text']}>Enter correct value...</p>
						)}
						<Input
							label='Year of issuance of the driving license'
							id='driving_license_year'
							type='number'
							value={drivingLicenseYear}
							onChange={yearChangeHandler}
							onBlur={yearBlurHandler}
						/>
						{yearHasError && (
							<p className={classes['error-text']}>Enter correct value...</p>
						)}
						{tooYoungError && (
							<p className={classes['error-text']}>
								You're too yound for PREMIUM...
							</p>
						)}
					</div>
				)}

				{index === 2 && (
					<div>
						<Input
							label='Estimated kilometers'
							id='kilometers'
							type='number'
							value={kilometerAmount}
							onChange={kilometerAmountChangeHandler}
							onBlur={kilometerAmountBlurHandler}
						/>
						{kilometerAmountHasError && (
							<p className={classes['error-text']}>
								Enter correct value min 5km...
							</p>
						)}
						<DatePickerForm onGetDays={setDays} />
					</div>
				)}

				{index === 3 && (
					<CalculationResults carInfo={props.car} userData={userData} />
				)}

				<div className={classes.actions}>
					<Button
						onClick={index === 3 ? closeModalHandler : prevButtonHandler}
						disabled={index === 1}>
						{index === 3 ? 'Close' : 'Previous'}
					</Button>
					{index !== 3 && (
						<Button onClick={submitHandler}>
							{index === 1 && 'Next'}
							{index === 2 && 'Submit'}
						</Button>
					)}
				</div>
			</form>
		</React.Fragment>
	);
};

export default CalculationForm;
