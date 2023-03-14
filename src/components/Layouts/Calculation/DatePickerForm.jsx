import React, { useState, useEffect, useRef } from 'react';
import { addDays, differenceInDays, format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import classes from './DatePickerForm.module.css';
const DatePickerForm = (props) => {
	const [state, setState] = useState({
		selection: {
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection',
		},
	});
	const [isOpen, setIsOpen] = useState(false);
	const refOne = useRef(null);

	useEffect(() => {
		document.addEventListener('keydown', hideOnEscape, true);
		document.addEventListener('click', hideOnClickOutside, true);
	}, []);

	const hideOnEscape = (e) => {
		if (e.key === 'Escape') {
			setIsOpen(false);
		}
	};

	const hideOnClickOutside = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	const passData = () => {
		const result = differenceInDays(
			state.selection.endDate,
			state.selection.startDate
		);
		props.onGetDays(result);
	};

	const handleSelect = (date) => {
		setState((prevState) => {
			return { ...prevState, ...date };
		});
	};

	const toggleCalendar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<React.Fragment>
			<label htmlFor='date'>
				Choose your rental date
				<span className={classes.char}>*</span>
			</label>
			<input
				id='date'
				readOnly
				className={classes['input-box']}
				value={`${format(state.selection.startDate, 'MM/dd/yyyy')} ${format(
					state.selection.endDate,
					'MM/dd/yyyy'
				)}`}
				onClick={toggleCalendar}></input>
			<div className={classes['calendar-wrap']}>
				<div className={classes['close-calendar']} ref={refOne}>
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
		</React.Fragment>
	);
};

export default DatePickerForm;
