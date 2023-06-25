import style from './Description.module.scss';
import illustration from '../../images/illustration-working.svg'
import { OvalButton } from '../Commons/OvalButton/OvalButton';

const Description = () => {
	return (

			<div className={style.container}>
				<div className={style.description}>
					<h1>More than just shorten links</h1>
					<p>
						Build your brand's recognition and get detailed <br/> insights on how your links are
						performing.
					</p>
					<OvalButton>Get Started</OvalButton>
				</div>
				<div className={style.image}>
					<img src={illustration} alt="work_illustration" />
				</div>
			</div>

	);
};

export default Description;
