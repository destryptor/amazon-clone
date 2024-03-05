import React from 'react';
import { useState, useEffect } from 'react';
import './MainPage.css';
import Cards from './4xCards';
import DailyDeals from './DailyDeals';
import ImageBelt from './ImageBelt';
import SingleCard from './SingleCard';
import PriceCard from './PriceCard';

const MainPage = () => {
	const [carditems, setCarditems] = useState([]);
	const [dailydeals, setDailydeals] = useState([]);
	const [imageBelt, setImageBelt] = useState([]);
	const [singlecards, setSinglecards] = useState([]);
	const [pricecards, setPricecards] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/CardItems')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setCarditems(data);
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
		fetch('http://localhost:8080/SingleCards')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setSinglecards(data);
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
		fetch('http://localhost:8080/DailyDeals')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setDailydeals(data);
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
		fetch('http://localhost:8080/ImageBelts')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setImageBelt(data);
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
		fetch('http://localhost:8080/PriceCards')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				// Set pricecards state with fetched data
				setPricecards(data);
			})
			.catch((error) => {
				// Handle errors here
				console.error('There was a problem with the fetch operation:', error);
			});
	}, []);

	return (
		<>
			<div className='mainpage_container'>
				<div className='mainpage'>
					<div className='belt'></div>
					<div className='card_container'>
						{carditems.slice(0, 8).map((card) => (
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
					<div className='imagebelt_container'>
						{imageBelt.slice(0, 2).map((image) => (
							<ImageBelt image={image} />
						))}
					</div>
					<div className='card_container'>
						{carditems.slice(8, 12).map((card) => (
							<Cards card={card} />
						))}
					</div>
					<div className='imagebelt_container'>
						{imageBelt.slice(2, 4).map((image) => (
							<ImageBelt image={image} />
						))}
					</div>
					<div className='card_container'>
						{singlecards.slice(0, 4).map((card) => (
							<SingleCard card={card} />
						))}
					</div>
					<div className='imagebelt_container'>
						{imageBelt.slice(4, 5).map((image) => (
							<ImageBelt image={image} />
						))}
					</div>
					<div className='pricecards_container'>
						<div className='pricecards'>
							{pricecards.map((card) => (
								<PriceCard card={card} />
							))}
						</div>
					</div>
					<div className='card_container'>
						{singlecards.slice(4, 6).map((card) => (
							<SingleCard card={card} />
						))}
						{carditems.slice(12, 14).map((card) => (
							<Cards card={card} />
						))}
					</div>
					<div className='imagebelt_container'>
						{imageBelt.slice(5, 6).map((image) => (
							<ImageBelt image={image} />
						))}
					</div>
					<div className='belt2'></div>
				</div>
			</div>
			<div className='sign_in_container'>
				<div className='add_container'>
					<span className='recom'>See personalised recommendations</span>
					<button>Sign in</button>
					<p>
						New customer? <span className='start'>Start here</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default MainPage;
