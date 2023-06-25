import style from './app.module.scss';
import Header from './Components/Header/Header';
import Description from './Components/Description/Description';
import Shortener from './Components/Shortener/Shortener';
import Results from './Components/Results/Results';
import Statistic from './Components/Statistic/Statistic';
import Footer from './Components/Footer/Footer';

const App = () => {
	return (
		<div className={style.wrapper}>
			<Header />
			<div className={style.container}>
				<Description />
				<Shortener />
				<Results />
				<Statistic />
			</div>
			<Footer />
		</div>
	);
};

export default App;
