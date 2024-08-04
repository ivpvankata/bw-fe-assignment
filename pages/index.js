import React from 'react';
import WidgetList from '../components/WidgetList';
import styles from '../styles/Home.module.scss';

const Home = () => {
	return (
		<div className={styles.container}>
			<WidgetList />
		</div>
	);
};

export default Home;
