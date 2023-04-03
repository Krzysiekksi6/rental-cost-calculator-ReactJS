import React, {useState} from 'react';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faCalendarCheck,
	faCalendarDays,
	faRoad,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import classes from './OtherInfo.module.css';

const OtherInfo = ({ errors, register, userData }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckBox = () => {
		setIsChecked(!isChecked)
	}
	const summaryData = [
		{
			label: 'Fullname',
			data: `${userData(['firstname'])} ${userData(['lastname'])}`,
			icon: faUser,
		},
		{
			label: 'Driving License Year',
			data: `${userData(['driving_license_year'])}`,
			icon: faCalendarCheck,
		},
		{
			label: 'Rent Date',
			data: `${userData(['calendar'])}`,
			icon: faCalendarDays,
		},
		{ label: 'Kilometers', data: `${userData(['kilometers'])}`, icon: faRoad },
	];

	const summaryContent = summaryData.map((item) => (
		<div key={uuidv4()} className={classes.info}>
			<span className={classes.label}>{item.label}</span>
			<p className={classes.p}>
				<span>
					<FontAwesomeIcon icon={item.icon} style={{ color: '#ff4606' }} />
				</span>
				<span className={classes.data}>{item.data}</span>
			</p>
		</div>
	));
	const content = (
		<span>
			I accept the{' '}
			<a className='' href='/' rel='noopener' target='_blank'>
				{'Privacy Policy'}
			</a>
			.
		</span>
	);
	return (
		<div className={classes['other-info']}>
			<div className={classes['summary-content']}>{summaryContent}</div>
			<div className={classes['container']}>
				<Checkbox
					id={'privacy'}
					name={'privacy'}
					label={content}
					register={register}
					errors={errors}
					onChange={() => setIsChecked(!isChecked)}
					checked={isChecked}
					required
				/>
			</div>
		</div>
	);
};

export default OtherInfo;
