import React from 'react';
import Head from 'next/head';
import WidgetList from '../components/WidgetList';

const Home = () => {
	return (
		<>
			<Head>
				<title>Best Casinos 2024</title>
				<meta name="description" content="Find the best casinos in 2024. Play responsibly and enjoy great bonuses." />
			</Head>
			<div>
				<WidgetList />
			</div>
		</>
	);
};

export default Home;
