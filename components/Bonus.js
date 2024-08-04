import React from 'react';
import styles from '../styles/Bonus.module.scss';

const Bonus = ({ bonus, betAmount, getAmount }) => {
	return (
		<div className={styles.widgetBonus}>
			<p className={styles.widgetBonusLabel}>{bonus}</p>
			<p className={styles.widgetBonusAmount}>{betAmount}</p>
			<p className={styles.widgetBonusAmount}>{getAmount}</p>
		</div>
	);
};

export default Bonus;
