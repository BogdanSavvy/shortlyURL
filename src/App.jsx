import style from './app.module.scss';
import Description from './Components/Description/Description';
import Header from './Components/Header/Header';
import Results from './Components/Results/Results';
import Shortener from './Components/Shortener/Shortener';

const App = () => {
	return (
		<>
			<Header />
			<div className={style.container}>
				<Description />
				<Shortener />
				<Results/>
			</div>
		</>
	);
};

export default App;
