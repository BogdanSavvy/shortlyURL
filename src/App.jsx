import style from './app.module.scss';
import Header from './Components/Header/Header';

const App = () => {
	return (
		<>
			<Header />
			<div className={style.container}>
				<div className={style.App}>Let's go</div>
			</div>
		</>
	);
};

export default App;
