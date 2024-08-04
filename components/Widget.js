import React from 'react';
import Title from './Title';
import Bonus from './Bonus';
import Rating from './Rating';
import Image from './Image';
import Button from './Button';
import styles from '../styles/Widget.module.scss';

const Widget = ({ backgroundColor, titleUrl, imageSrc, title, rating, bonus, betAmount, getAmount, url }) => {
	return (
		<div className={styles.widget}>
			<div className={styles.widgetInner}>
				<Image imageSrc={imageSrc} title={title} titleUrl={titleUrl} backgroundColor={backgroundColor} />
				<div className={styles.widgetCols}>
					<div className={styles.widgetCol}>
						<Title title={title} url={url} />
						<Rating rating={rating} />
					</div>
					<div className={styles.widgetCol}>
						<Bonus bonus={bonus} betAmount={betAmount} getAmount={getAmount} />
					</div>
				</div>
				<div className={styles.widgetActions}>
					<Button title={title} buttonUrl={titleUrl} />
				</div>
			</div>
		</div>
	);
};

export default Widget;
