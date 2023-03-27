import React, { useEffect, useState, useRef } from 'react';
import MultiStepProgressBar from '../../UI/MultiStepProgressBar/MultiStepProgressBar';
import Button from '../../UI/Button/Button';
import CalculationResult from './CalculationResults';
import { useForm } from 'react-hook-form';
import UserInfo from './Steps/UserInfo';
import RentInfo from './Steps/RentInfo';
import OtherInfo from './Steps/OtherInfo';
import classes from './CalculationForm.module.css';

const CalculationForm = (props) => {
	const {
		watch,
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });
	const [page, setPage] = useState(0);
	const FormtTitles = ['Personal Info', 'Rent Car Info', 'Summary'];
	const refOne = useRef(null);
	useEffect(() => {
		document.addEventListener('keydown', hideOnEscape, true);
		document.addEventListener('click', hideOnClickOutside, true);
	}, []);

	const closeModalHandler = () => {
		props.onCloseModal();
	};

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

	const nextPageButtonHandler = () => {
		setPage((currentPage) => currentPage + 1);
	};

	const previousPageButtonHandler = () => {
		setPage((currentPage) => currentPage - 1);
	};

	const submitHandler = (values) => {
		console.log(page);
		console.log(JSON.stringify(values, null, 2));
	};

	const PageDisplay = () => {
		if (page === 0) {
			return (
				<UserInfo
					errors={errors}
					register={register}
					category={props.car.category}
					getValues={getValues}
				/>
			);
		} else if (page === 1) {
			return <RentInfo errors={errors} register={register} />;
		} else if (page === 2) {
			return <OtherInfo errors={errors} register={register} car={props.car} userData={getValues} />;
		} else if (page === 3) {
			return <CalculationResult />;
		}
	};

	const renderButton = () => {
		return page >= FormtTitles.length - 1 ? (
			<Button
				disabled={!isValid}
				type={'submit'}
				onClick={nextPageButtonHandler}>
				Submit
			</Button>
		) : (
			<Button
				disabled={!isValid}
				type={'button'}
				onClick={nextPageButtonHandler}>
				Next
			</Button>
		);
	};

	return (
		<React.Fragment>
			<MultiStepProgressBar step={page + 1} />
			<form
				ref={refOne}
				className={classes['form']}
				onSubmit={handleSubmit(submitHandler)}>
				<div className={classes['form__header']}>
					<h2>{FormtTitles[page]}</h2>
				</div>
				<div className={classes['form__body']}>{PageDisplay()}</div>
				<div className={classes['form__footer']}>
					{page !== 3 && (
						<Button
							type={'button'}
							disabled={page === 0}
							onClick={previousPageButtonHandler}>
							Prev
						</Button>
					)}
					{page !== 3 && renderButton()}
				</div>
				{/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
			</form>
		</React.Fragment>
	);
};

export default CalculationForm;
