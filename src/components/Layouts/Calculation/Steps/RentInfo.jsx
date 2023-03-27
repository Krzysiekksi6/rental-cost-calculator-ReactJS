import React, { useEffect, useRef, useState } from 'react';
import { addDays, differenceInDays, format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Input from '../../../UI/Input/Input';
import classes from './RentInfo.module.css';
const RentInfo = ({ errors, register }) => {
	const MIN_KILOMETERS = 1;
	const MAX_KILOMETERS = 2000;
	const KILOMETERS = 530;
	const refCalendar = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [state, setState] = useState({
		selection: {
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection',
		},
	});

	useEffect(() => {
		document.addEventListener('click', hideOnClickOutside, true);
		document.addEventListener('keydown', hideOnEscape, true);
	}, []);

	const hideOnEscape = (e) => {
		if (e.key === 'Escape') {
			setIsOpen(false);
		}
	};

	const hideOnClickOutside = (e) => {
		if (refCalendar.current && !refCalendar.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	const passData = () => {
		const result = differenceInDays(
			state.selection.endDate,
			state.selection.startDate
		);
	};

	const handleSelect = (date) => {
		setState((prevState) => {
			return { ...prevState, ...date };
		});
	};

	const toggleCalendar = () => {
		setIsOpen(!isOpen);
	};

	let currentDataValue = `${format(
		state.selection.startDate,
		'MM/dd/yyyy'
	)} ${format(state.selection.endDate, 'MM/dd/yyyy')}`;
	return (
		<div className='rentInfo'>
			
			<Input
				label='Choose your rental date'
				name='calendar'
				className={classes['input-box']}
				value={currentDataValue}
				errors={errors}
				register={register}
				onClick={toggleCalendar}
			/>
			<div className={classes['calendar-wrap']}>
				<div className={classes['close-calendar']} ref={refCalendar}>
					{isOpen && (
						<DateRange
							className={classes['calendar-element']}
							onChange={handleSelect}
							months={1}
							moveRangeOnFirstSelection={false}
							minDate={addDays(new Date(), 0)}
							maxDate={addDays(new Date(), 30)}
							direction='vertical'
							scroll={{ enabled: true }}
							ranges={[state.selection]}
							rangeColors={['#ff4605e0']}
						/>
					)}
					{!isOpen && passData()}
				</div>
			</div>
			<Input
				label='Estimated kilometers'
				name='kilometers'
				type='number'
				errors={errors}
				register={register}
				validationSchema={{
					required: 'Kilometers are required!',
					pattern: {
						value:/^[1-9]+[0-9]*$/,
						message: 'Please enter valid year'
					},
					max: {
						value: MAX_KILOMETERS,
						message: 'Sorry, the value given is too high!'
					}, min: {
						value: MIN_KILOMETERS,
						message: 'Enter correct value!'
					}
				}}
				required
				placeholder={KILOMETERS}
			/>
		</div>
	);
};

export default RentInfo;
