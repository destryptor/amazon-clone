import React from 'react';
import './SingleCard.css';

const SingleCard = ({ card }) => {
	return (
		<div className='singlecard'>
			<h3>{card.title}</h3>
			<div className='img_container'>
				<img src={card.link} alt={card.title} />
			</div>
			<p>{card.endline}</p>
		</div>
	);
};

export default SingleCard;
