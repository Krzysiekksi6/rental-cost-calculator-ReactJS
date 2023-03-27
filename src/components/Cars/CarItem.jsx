import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import CalculationForm from '../Layouts/Calculation/CalculationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDollarSign,
	faTags,
	faGasPump,
	faRoute,
	faCalendarDays,
	faCheck,
	faGaugeSimple,
} from '@fortawesome/free-solid-svg-icons';
import classes from './CarItem.module.css';
const FUEL_PRICE = 6.98;
const CarItem = (props) => {
	const [isShow, setIsShow] = useState(false);
	const [car, setCar] = useState({
		id: '',
		brand: '',
		model: '',
		img: '',
		basePrice: 0,
		avgFuelConsumption: 0,
		amountOfAvaliable: 0,
		category: '',
	});
	const rentCarHandler = () => {
		setIsShow(true);
		setCar({
			id: props.id,
			brand: props.brand,
			model: props.model,
			img: props.img,
			basePrice: props.basePrice,
			avgFuelConsumption: props.avgFuelConsumption,
			amountOfAvaliable: props.amountOfAvaliable,
			category: props.category,
		});
	};

	const basicInformationData = [
		{	
			label: props.basePrice,
			icon: faDollarSign,
		},
		{
			label: props.amountOfAvaliable,
			icon: faCheck,
		},
		{
			label: props.avgFuelConsumption,
			icon: faGaugeSimple,
		},
		{
			label: props.category,
			icon: faTags,
		},
		{
			label: FUEL_PRICE,
			icon: faGasPump,
		},
	];

	const information = basicInformationData.map((item) => (
		<div key={item.label} className={classes.info}>
			<FontAwesomeIcon icon={item.icon} style={{color: '#ff4606'}}/>
			<span className={classes.value}>{item.label}</span>
		</div>
	));

	const closeModal = () => {
		setIsShow(false);
	};

	// useEffect(() => {
	// 	document.addEventListener('keydown', hideOnEscape, true);
	// 	document.addEventListener('click', hideOnClickOutside, true);
	// }, []);

	
	const modalContent = (
		<React.Fragment>
			<CalculationForm car={car} onCloseModal={closeModal} />
		</React.Fragment>
	);

	const carItemTitle = `${props.brand} ${props.model}`;
	return (
		<li className={classes.car}>
			<div className={classes.image}>
				<img src={props.img} alt={`${props.brand} ${props.model}`} />
			</div>
			<div className={classes.heading}>
				<h2 className={classes.car__title}>{carItemTitle}</h2>
				<p>Basic information</p>
			</div>
			<div className={classes.content}>
				<div className={classes.description}>
					{information}
				</div>

				<div className={classes.actions}>
					<Button type='button' onClick={rentCarHandler}>
						Rent now
					</Button>
				</div>
			</div>

			{isShow && <Modal>{modalContent}</Modal>}
		</li>
	);
};

export default CarItem;
