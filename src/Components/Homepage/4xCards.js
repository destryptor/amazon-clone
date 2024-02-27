import React from 'react';
import './4xCards.css';

const Cards = ({ card }) => {
	return (
		<div className='card'>
			<h3>{card.title}</h3>
			<div className='card_item_container'>
				{card.items.map((item) => (
					<div className='card_item'>
						<img src={item.link} alt={item.name} />
						<p>{item.name}</p>
					</div>
				))}
			</div>
			<p className='endline'>{card.endline}</p>
		</div>
	);
};

export default Cards;
