import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = ({ buttonUrl, title }) => {
	return (
		<div className={styles.widgetActions}>
			<a href={buttonUrl} className={styles.widgetButton} aria-label={`Bet now at ${title}`}>
				Bet Now
			</a>
		</div>
	);
};

export default Button;
