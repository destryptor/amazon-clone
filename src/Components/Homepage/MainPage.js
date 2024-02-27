import React from 'react';
import './MainPage.css';
import Cards from './4xCards';

const MainPage = () => {
	// const titles = [, , '', 'Starting ₹99 | All your home improvement needs', 'Up to 60% off | Styles for men', 'Up to 60% off | Styles for women', 'Automotive essentials | Up to 60% off', 'Get the perfect screen size | TVs Starting ₹6,999', 'Baby care & fun games | Amazon Brands & more'];

	const carditems = [
		{
			title: 'Revamp your home in style',
			items: [
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/bedcover.png?updatedAt=1709047241426',
					name: 'Cushion covers, bedsheets & more',
				},

				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image.png?updatedAt=1709046835402',
					name: 'Figurines, vases and more',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/homestor.png?updatedAt=1709047017721',
					name: 'Home storage',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(1).png?updatedAt=1709047171453',
					name: 'Lighting solutions',
				},
			],
			endline: 'Explore all',
		},
		{
			title: 'Appliances for your home | Up to 55% off',
			items: [
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/ac.png?updatedAt=1709046014363',
					name: 'Air conditioners',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/frideg.png?updatedAt=1709051312003',
					name: 'Refrigerators',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/mikrowave.png?updatedAt=1709051427982',
					name: 'Microwaves',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/washing.png?updatedAt=1709051367700',
					name: 'Washing machines',
				},
			],
			endline: 'See more',
		},
		{
			title: 'Up to 75% off | Headphones',
			items: [
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/boat.png?updatedAt=1709051627649',
					name: 'Up to 75% off | boAt',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/boult.png?updatedAt=1709051708516',
					name: 'Up to 75% off | boult',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/noise.png?updatedAt=1709051708950',
					name: 'Up to 75% off | Noise',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/zebronics.png?updatedAt=1709051724934',
					name: 'Up to 75% off | Zebronics',
				},
			],
			endline: 'See all offers',
		},
		{
			title: 'Starting ₹99 | All your home improvement needs',
			items: [
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/spinmop.png?updatedAt=1709052046705',
					name: 'Spin mops, wipes & more',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/bathroom.png?updatedAt=1709052063973',
					name: 'Bathroom hardware & accessories',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/hammer.png?updatedAt=1709052104822',
					name: 'Hammers, screwdrivers & more',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/extension.png?updatedAt=1709052105276',
					name: 'Extension boards, plugs & more',
				},
			],
			endline: 'Explore all',
		},
	];
	return (
		<div className='mainpage_container'>
			<div className='mainpage'>
				<div className='belt'></div>
				<div className='card_container'>
					{carditems.map((card) => (
						<Cards card={card} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MainPage;
