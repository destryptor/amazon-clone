import React from 'react';
import './MainPage.css';
import Cards from './4xCards';
import DailyDeals from './DailyDeals';

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
		{
			title: 'Up to 60% off | Styles for men',
			items: [
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/clothing.png?updatedAt=1709132669757',
					name: 'Clothing',
				},

				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/schuhe.png?updatedAt=1709132697342',
					name: 'Footwear',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(2).png?updatedAt=1709046547434',
					name: 'Watches',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(3).png?updatedAt=1709046553295',
					name: 'Bags & wallets',
				},
			],
			endline: 'End of season sale',
		},
		{
			title: 'Up to 60% off | Styles for women',
			items: [
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(4).png?updatedAt=1709046569823',
					name: 'Clothing',
				},

				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(5).png?updatedAt=1709046569831',
					name: 'Footwear+Handbag',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(6).png?updatedAt=1709046569733',
					name: 'Watches',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(7).png?updatedAt=1709046569823',
					name: 'Fashion jewelerry',
				},
			],
			endline: 'End of season sale',
		},
		{
			title: 'Baby care & fun games | Amazon Brands & more',
			items: [
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(16).png?updatedAt=1709046621369',
					name: 'Minimum 50% off | Diapers & wipes',
				},

				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(17).png?updatedAt=1709046625085',
					name: 'Minimum 40% off | Baby cardels & more',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/toys.png?updatedAt=1709135472949',
					name: 'Minimum 40% off | Soft toys & Indoor games',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/cycle.png?updatedAt=1709135410005',
					name: 'Minimum 40% off | Outdoor games',
				},
			],
			endline: 'See more',
		},
		{
			title: 'Get the perfect screen size | TVs Starting ₹6,999',
			items: [
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(12).png?updatedAt=1709046613718',
					name: 'Budget TVs | Up to 60% off',
				},

				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(13).png?updatedAt=1709046614057',
					name: '4K TVs | Up to 24 months No Cost EMI',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(14).png?updatedAt=1709046614122',
					name: 'Big Screens | Up to 60% off',
				},
				{
					link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/image(15).png?updatedAt=1709046614134',
					name: 'Ultra Premium TVs | Up to 50% off',
				},
			],
			endline: 'See more',
		},
	];

	const dailydeals = [
		{
			link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/dailydeals/31Q0xVpBphL._AC_SY200_.jpg?updatedAt=1709136178223',
			discount: 'Up to 72% off',
			time: 'Limited time deal',
			title: 'Branded Suitcase, Backpacks and Duffle Bags',
		},
		{
			link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/dailydeals/agni.jpg?updatedAt=1709136249071',
			discount: 'Up to 31% off',
			time: 'Ends in 02:08:33',
			title: 'Lava Agni 2 Available at Rs. 17,999',
		},
		{
			link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/dailydeals/atis.png?updatedAt=1709136277522',
			discount: 'Up to 32% off',
			time: 'Ends in 02:08:33',
			title: 'itel A70 starting Rs. 6299',
		},
		{
			link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/dailydeals/image(1).png?updatedAt=1709136296779',
			discount: 'Up to 52% off',
			time: 'Limited time deal',
			title: 'Best Offers from Top Brands',
		},
		{
			link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/dailydeals/image(2).png?updatedAt=1709136306176',
			discount: 'Up to 65% off',
			time: 'Limited time deal',
			title: 'Best Deals on Puma',
		},
		{
			link: 'https://ik.imagekit.io/lk71zbgkh/amazon-image/dailydeals/image(3).png?updatedAt=1709136314517',
			discount: 'Up to 94% off',
			time: 'Limited time deal',
			title: 'Travel Adapters And Electronic Accessories',
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
				<div className='dailydeals_container'>
					<div className='deals_title_container'>
						<h3>Today's Deals</h3>
						<span>See all deals</span>
					</div>
					<div className='deals_container'>
						{dailydeals.map((deal) => (
							<DailyDeals deal={deal} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
