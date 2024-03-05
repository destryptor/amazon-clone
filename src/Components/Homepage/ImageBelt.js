import React from 'react';
import './ImageBelt.css';

const ImageBelt = ({ image }) => {
	return (
		<div className='imagebelt'>
			<div className='title_container'>
				<h3>{image.title}</h3>
				<p>See all offers</p>
			</div>
			<div className='images_container'>
				{image.links.map((link) => (
					<div className='images_link'>
						<img src={link} alt={image.title} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageBelt;
