import style from './app.module.scss';
import Header from './Components/Header/Header';
import Description from './Components/Description/Description';
import Shortener from './Components/Shortener/Shortener';
import Results from './Components/Results/Results';
import Statistic from './Components/Statistic/Statistic';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

const App = () => {
	const [shortenLinks, setShortenLinks] = useState([]);
	return (
		<div className={style.wrapper}>
			<Header />
			<div className={style.container}>
				<Description />
				<Shortener setShortenLinks={setShortenLinks} shortenLinks={shortenLinks} />
				<Results shortenLinks={shortenLinks} />
				<Statistic />
			</div>
			<Footer />
		</div>
	);
};

export default App;
