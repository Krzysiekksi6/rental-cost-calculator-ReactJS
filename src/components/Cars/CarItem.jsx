import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import CalculationForm from '../Layouts/Calculation/CalculationForm';
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

	const closeModal = () => {
		setIsShow(false);
	};

	// useEffect(() => {
	// 	document.addEventListener('keydown', hideOnEscape, true);
	// 	document.addEventListener('click', hideOnClickOutside, true);
	// }, []);

	let carCategoryClasses;
	if(props.category === 'premium') {
		carCategoryClasses = classes.premium
	} else if(props.category === 'medium') {
		carCategoryClasses = classes.medium
	} else if(props.category === 'standard') {
		carCategoryClasses = classes.standard
	} else {
		carCategoryClasses = classes.basic
	}



	const modalContent = (
		<React.Fragment>
			<CalculationForm car={car} onCloseModal={closeModal} />
		</React.Fragment>
	);


	const carItemTitle = `${props.brand} ${props.model}`;
	return (
		<li className={classes.car}>
			<h2 className={classes.car__title}>{carItemTitle}</h2>
			
			<div className={classes.content}>
				<div className={classes.description}>
					<p>
						Daily rent price:{' '}
						<span className={classes.value}>${props.basePrice}</span>
					</p>
					<p>
						Fuel consumption: {' '}
						<span className={classes.value}>
							{props.avgFuelConsumption}l / 100km
						</span>
					</p>
					<p>
						Avalible models:{' '}
						<span className={classes.value}>{props.amountOfAvaliable}</span>
					</p>

					<p>
						Fuel price:{' '}
						<span className={classes.value}>${FUEL_PRICE}</span>
					</p>

					<p>
						Category:{' '}
						<span className={`${classes.value} ${carCategoryClasses}`}>
							{props.category.toUpperCase()}
						</span>
					</p>
				</div>
				<div className={classes.image}>
					<img src={props.img} alt={`${props.brand} ${props.model}`} />
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
