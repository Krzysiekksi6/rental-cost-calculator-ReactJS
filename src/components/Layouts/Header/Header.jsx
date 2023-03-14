import React from 'react';
import CarIcon from '../../UI/Icons/CarIcon';
import classes from './Header.module.css';

const Header = () => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<div className={classes.heading}>
					<h2>
						<span>Car</span>Costs
					</h2>
				</div>
				<div className={classes.logo}>
					<span className={classes.icon}>
						<CarIcon />
					</span>
				</div>
			</header>
			<div className={classes['hero-bg']}>
				<div className={classes['main-image']}>
					<div className={classes['hero-shadow']}></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;
