import React from 'react';
import './Footer.css';

import FooterTop from './FooterTop';
import FooterServices from './FooterServices';
import FooterCountries from './FooterCountries';
import FooterBottom from './FooterBottom';

const Footer = () => {
	return (
		<div className='footer'>
			<FooterTop />
			<FooterServices />
			<FooterCountries />
			<FooterBottom />
		</div>
	);
};

export default Footer;
