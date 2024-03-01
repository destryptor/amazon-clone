import React from 'react';
import './PriceCard.css';

const PriceCard = ({ card }) => {
	return (
		<div className='pricecard'>
			<img src={card.link} alt={card.title} />
			<div className='card_title_container'>{card.title}</div>
			<div className='pricecontainer'>
				<p className='mini'>₹</p>
				<p className='curr_price'>{card.price}</p>
				<p className='mini'>00</p>
				<p className='price_discount'>{card.discount}</p>
			</div>
		</div>
	);
};

export default PriceCard;
