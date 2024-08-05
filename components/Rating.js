import React from 'react';
import styles from '../styles/Rating.module.scss';

const Rating = ({ rating }) => {
	return (
		<div>
			<span className="sr-only">{`Rated ${rating} out of 5 stars`}</span>

			<ul className={styles.widgetStarsRating} aria-label="Star rating">
				{[...Array(5)].map((_, i) => (
					<li key={i} className={`${styles.star} ${i < rating ? styles.filled : styles.empty}`} aria-hidden="true"></li>
				))}
			</ul>
		</div>
	);
};

export default Rating;
