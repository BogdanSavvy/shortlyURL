import style from './Footer.module.scss';
import { OvalButton } from '../../Commons/OvalButton/OvalButton';
import wavesBg from '../../../images/bg-boost-desktop.svg';

const Footer = ({ scrollToElement }) => {
	return (
		<div className={style.container}>
			<img src={wavesBg} alt="wavesBg" />
			<h2>Boost your links today</h2>
			<OvalButton onClick={scrollToElement}>Get Started</OvalButton>
		</div>
	);
};

export default Footer;
