import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<div>
			<div className='navbar_component'>
				<div className='navbar_logo'>
					<div className='navbar_logo_img'></div>
					<div className='navbar_logo_text'>.in</div>
				</div>

				<div className='navbar_locator'>
					<div className='navbar_locator-image'></div>
					<div className='navbar_location'>
						<div className='navbar_location_deliver'>Delivering to Kharagpur 721301</div>
						<div className='navbar_location_change'>Update location</div>
					</div>
				</div>
				<div className='navbar_searchcomponent'>
					<div>
						<select className='navbar_searchdropdown'>
							<option className='All'>All</option>
							<option className='Alexa'>Alexa</option>
							<option className='Electronics'>Electronics</option>
							<option className='Mobiles'>Mobiles</option>
							<option className='Books'>Books</option>
							<option className='Fashion'>Fashion</option>
						</select>
					</div>
					<div>
						<input type='text' className='navbar_searchbox' placeholder='Search Amazon.in' />
					</div>
					<div className='navbar_searchboxdiv'>
						<div className='navbar_searchicon'></div>
					</div>
				</div>
				<select className='navbar_text navbar_language'>
					<option>EN</option>
					<option>ES</option>
					<option>FR</option>
					<option>DE</option>
					<option>IT</option>
					<option>JP</option>
				</select>
				<div className='navbar_text navbar_signin'>
					<div style={{ fontSize: '12px' }}>Hello, sign in</div>
					<div style={{ fontWeight: 'bold', marginTop: '-3px', fontSize: '14px' }}>Account & Lists</div>
				</div>
				<div className='navbar_text navbar_returns'>
					<div style={{ fontSize: '12px' }}>Returns</div>
					<div style={{ fontWeight: 'bold', marginTop: '-3px', fontSize: '14px' }}>& Orders</div>
				</div>
				<div className='navbar_text navbar_cart'>
					<div className='cart-image'></div>
					<div className='cart_item'>0</div>
					<div className='navbar_text_cart'>Cart</div>
				</div>
			</div>
			<div className='navbar_footer'>
				<div className='navbar_footer_text'>Fresh</div>
				<div className='navbar_footer_text'>Amazon miniTV</div>
				<div className='navbar_footer_text'>Sell</div>
				<div className='navbar_footer_text'>Best Sellers</div>
				<div className='navbar_footer_text'>Mobiles</div>
				<div className='navbar_footer_text'>Today's Deals</div>
				<div className='navbar_footer_text'>Electronics</div>
				<div className='navbar_footer_text'>Customer Service</div>
				<div className='navbar_footer_text'>Home & Kitchen</div>
				<div className='navbar_footer_text'>Gift Ideas</div>
				<div className='navbar_footer_text'>New Releases</div>
				<div className='navbar_footer_text'>Fashion</div>
				<div className='navbar_footer_text'>Amazon Pay</div>
				<div className='navbar_footer_text'>Computers</div>
				<div className='navbar_footer_text'>Books</div>
				<div className='navbar_footer_text'>Toys & Games</div>
				<div className='navbar_footer_text'>Car & Motorbike</div>
			</div>
		</div>
	);
};

export default Navbar;
