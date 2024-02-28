import React from 'react';
import './DailyDeals.css';

const DailyDeals = ({ deal }) => {
	const { link, discount, time, title } = deal;
	return (
		<div className='dealcard'>
			<div className='img_container'>
				<img src={link} alt={title} />
			</div>
			<div className='dealbelt'>
				<span className='discount'>{discount}</span>
				<span className='time'>{time}</span>
			</div>
			<div className='title'>{title}</div>
		</div>
	);
};

export default DailyDeals;
