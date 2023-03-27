import React from 'react';
import Input from '../../../UI/Input/Input';
import classes from './OtherInfo.module.css';
import Checkbox from '../../../UI/Checkbox/Checkbox';
const OtherInfo = ({ errors, register, car, userData }) => {
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
		<div className='other-info'>
			<p>{userData(['firstname'])}</p>
			<p>{userData(['lastname'])}</p>
			<p>{userData(['driving_license_year'])}</p>
			<p>{userData(['calendar'])}</p>
			<p>{userData(['kilometers'])}</p>
			<div className={classes['container']}>
				<Checkbox id={'privacy'} label={content} checked={false} />
			</div>
		</div>
	);
};

export default OtherInfo;
