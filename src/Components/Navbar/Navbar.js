import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
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
					<input type='text' className='navbar_searchbox' />
				</div>
				<div className='navbar_searchboxdiv'>
					<div className='navbar_searchicon'></div>
				</div>
			</div>
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
	);
};

export default Navbar;
