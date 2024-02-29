import React from 'react';
import './ImageBelt.css';

const ImageBelt = ({ title, links }) => {
	return (
		<div className='imagebelt'>
			<div className='title_container'>
				<h3>{title}</h3>
				<p>See all offers</p>
			</div>
			<div className='images_container'>
				{links.map((link) => (
					<div className='images_link'>
						<img src={link} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageBelt;
