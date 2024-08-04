import React from 'react';
import styles from '../styles/Title.module.scss';

const Title = ({ title, url }) => {
	return (
		<div className={styles.widgetTitle}>
			<a href={url} aria-label={`Link to ${title}`}>
				{title}
			</a>
		</div>
	);
};

export default Title;
