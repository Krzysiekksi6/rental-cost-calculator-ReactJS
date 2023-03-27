import React from 'react';
import Input from '../../../UI/Input/Input';

const MIN_INPUT = 100;
const NAME_PLACEHOLDER = 'John';
const LAST_NAME_PLACEHOLDER = 'Smith';
const UserInfo = ({ errors, register, category, getValues }) => {
	const getCurrentYear = () => {
		const date = new Date();
		return date.getFullYear();
	};
	const minInputYear = () => {
		return getCurrentYear() - MIN_INPUT;
	};

	const maxInputYear = () => {
		return getCurrentYear();
	};

	return (
		<div className='userInfo'>
			<Input
				id='firstname'
				label='First name'
				name='firstname'
				type='text'
				errors={errors}
				register={register}
				validationSchema={{
					required: 'Please type your firstname',
					minLength: {
						value: 3,
						message: 'Please enter a minimum of 3 characters',
					},
				}}
				required
				placeholder={NAME_PLACEHOLDER}
			/>

			<Input
				id='lastname'
				label='Last name'
				name='lastname'
				type='text'
				errors={errors}
				register={register}
				validationSchema={{
					required: 'Please type your lastname',
					minLength: {
						value: 3,
						message: 'Please type a minimum of 3 characters',
					},
				}}
				required
				placeholder={LAST_NAME_PLACEHOLDER}
			/>

			<Input
				id='driving_license_year'
				label='Year of issuance of the driving license'
				name='driving_license_year'
				type='number'
				errors={errors}
				register={register}
				validationSchema={{
					required: 'Year is required!',
					validate: () => {
						
						const currentYear = getCurrentYear();
						const calculate = currentYear - +getValues('driving_license_year');
						if (category === 'premium' && calculate < 3) {
							return false;
						} else {
							return true;
						}

					},
					pattern: {
						value: /^[1-9]+[0-9]*$/,
						message: 'Please enter valid year',
					},
					max: {
						value: maxInputYear(),
						message: 'Sorry, You are too young driver!',
					},
					min: {
						value: minInputYear(),
						message: `Are you sure you're still alive?`,
					},
				}}
				required
				placeholder={`${maxInputYear()}`}
			/>
		</div>
	);
};

export default UserInfo;
