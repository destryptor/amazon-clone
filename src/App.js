import './App.css';
import MainPage from './Components/Homepage/MainPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<MainPage />
			<Footer />
		</div>
	);
}

export default App;
