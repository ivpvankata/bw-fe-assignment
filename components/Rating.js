import React from 'react';
import styles from '../styles/Rating.module.scss';

const Rating = ({ rating }) => {
	return (
		<ul className={styles.widgetStarsRating} aria-label="Star rating">
			{[...Array(5)].map((_, i) => (
				<li key={i} className={`${styles.star} ${i < rating ? styles.filled : styles.empty}`} aria-hidden="true"></li>
			))}
		</ul>
	);
};

export default Rating;
