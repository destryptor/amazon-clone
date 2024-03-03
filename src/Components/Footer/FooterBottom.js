import React from 'react';
import './FooterBottom.css';

const FooterBottom = () => {
	return (
		<div className='footer_bottom'>
			<div className='columns'>
				<div className='column'>
					<p className='head'>AbeBooks</p>
					<p className='content'>Books, art</p>
					<p className='content'>& collectibles</p>
				</div>
				<div className='column'>
					<p className='head'>Amazon Web Services</p>
					<p className='content'>Scalable Cloud</p>
					<p className='content'>Computing Services</p>
				</div>
				<div className='column'>
					<p className='head'>Audible</p>
					<p className='content'>Download</p>
					<p className='content'>Audio Books</p>
				</div>
				<div className='column'>
					<p className='head'>IMDb</p>
					<p className='content'>Movies, TV</p>
					<p className='content'>& Celebrities</p>
				</div>
				<div className='column'>
					<p className='head'>Shopbop</p>
					<p className='content'>Designer</p>
					<p className='content'>Fashion Brands</p>
				</div>
				<div className='column'>
					<p className='head'>Amazon Business</p>
					<p className='content'>Everything for</p>
					<p className='content'>Your Business</p>
				</div>
				<div className='column'>
					<p className='head'>Prime Now</p>
					<p className='content'>2-Hour Delivery</p>
					<p className='content'>on Everyday Items</p>
				</div>
				<div className='column'>
					<p className='head'>Amazon Prime Music</p>
					<p className='content'>100 million songs, ad-free</p>
					<p className='content'>Over 15 million podcast episodes</p>
				</div>
			</div>
			<div className='tnc'>
				<p>Conditions of Use & Sale</p>
				<p>Privacy Notice</p>
				<p>Interest-Based Ads</p>
				<p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
			</div>
		</div>
	);
};

export default FooterBottom;
