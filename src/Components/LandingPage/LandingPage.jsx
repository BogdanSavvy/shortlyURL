import style from './LanfingPage.module.scss';
import Description from './Description/Description';
import Shortener from '../Shortener/Shortener';
import Results from '../Results/Results';
import Statistic from './Statistic/Statistic';
import Footer from './Footer/Footer';

const LandingPage = ({ scrollToElement, myRef, setShortenLinks, shortenLinks }) => {
	return (
		<>
			<div className={style.container}>
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

export default LandingPage;
