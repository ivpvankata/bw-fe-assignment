import React from 'react';
import styles from '../styles/Image.module.scss';

const Image = ({ backgroundColor, titleUrl, imageSrc, title }) => {
	return (
		<div className={styles.widgetImage}>
			<a href={titleUrl} aria-label={`Link to ${title}`} style={{ backgroundColor }}>
				<img src={imageSrc} alt={`Logo of ${title}`} className={styles.widgetImg} />
			</a>
		</div>
	);
};

export default Image;
