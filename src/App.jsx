import style from './app.module.scss';
import Header from './Components/Header/Header';
import Description from './Components/Description/Description';
import Shortener from './Components/Shortener/Shortener';
import Results from './Components/Results/Results';
import Statistic from './Components/Statistic/Statistic';
import Footer from './Components/Footer/Footer';
import { useState, useRef } from 'react';

const App = () => {
	const [shortenLinks, setShortenLinks] = useState([]);

	const myRef = useRef(null);

	const scrollToElement = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<div className={style.wrapper}>
				<Header />
				<Description scrollToElement={scrollToElement} />
				<Shortener
					myRef={myRef}
					setShortenLinks={setShortenLinks}
					shortenLinks={shortenLinks}
				/>
				<Results shortenLinks={shortenLinks} />
				<Statistic />
			</div>
			<Footer scrollToElement={scrollToElement} />
		</>
	);
};

export default App;
