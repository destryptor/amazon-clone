import React from 'react';
import './FooterCountries.css';

const FooterCountries = () => {
	return (
		<div className='footer_countries_container'>
			<div className='logo_lang_container'>
				<div className='footer_logo'></div>
				<div className='footer_lang'>
					<select>
						<option value='en'>English</option>
						<option value='es'>Español</option>
						<option value='fr'>Français</option>
						<option value='de'>Deutsch</option>
						<option value='it'>Italiano</option>
					</select>
				</div>
			</div>
			<div className='countries'>
				<p>Australia</p>
				<p>Brazil</p>
				<p>Canada</p>
				<p>China</p>
				<p>France</p>
				<p>Germany</p>
				<p>Italy</p>
				<p>Japan</p>
				<p>Mexico</p>
				<p>Netherlands</p>
				<p>Poland</p>
				<p>Singapore</p>
				<p>Spain</p>
				<p>Turkey</p>
				<p>United Arab Emirates</p>
				<p>United Kingdom</p>
				<p>United States</p>
			</div>
		</div>
	);
};

export default FooterCountries;
