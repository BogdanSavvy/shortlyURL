import style from './Description.module.scss';
import { OvalButton } from '../../Commons/OvalButton/OvalButton';
import illustration from '../../../images/illustration-working.svg';

const Description = ({ scrollToElement }) => {
	return (
		<div className={style.container}>
			<div className={style.description}>
				<h1>More than just shorten links</h1>
				<p>
					Build your brand's recognition and get detailed <br /> insights on how your
					links are performing.
				</p>
				<OvalButton onClick={scrollToElement}>Get Started</OvalButton>
			</div>
			<div className={style.image}>
				<img src={illustration} alt="work_illustration" />
			</div>
		</div>
	);
};

export default Description;
