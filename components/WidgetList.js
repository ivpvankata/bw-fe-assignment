import React from 'react';
import Widget from './Widget';
import widgetsData from '../data/widgetsData';
import styles from '../styles/WidgetList.module.scss';

const WidgetList = () => {
	return (
		<section className={styles.widgetList}>
			<div className="hull">
				<h1 className={styles.widgetListTitle}>Best Casinos 2024</h1>

				<ul>
					{widgetsData.map((widget) => (
						<li key={widget.id}>
							<Widget
								imageSrc={widget.imageSrc}
								backgroundColor={widget.backgroundColor}
								title={widget.title}
								titleUrl={widget.titleUrl}
								rating={widget.rating}
								bonus={widget.bonus}
								betAmount={widget.betAmount}
								getAmount={widget.getAmount}
								buttonUrl={widget.buttonUrl}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default WidgetList;
