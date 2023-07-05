import style from './Statistic.module.scss';
import recognitionImg from '../../images/icon-brand-recognition.svg';
import recordsImg from '../../images/icon-detailed-records.svg';
import customizableImg from '../../images/icon-fully-customizable.svg';
const Statistic = () => {
	return (
		<div className={style.container}>
			<h2>Advanced statistics</h2>
			<p>
				Track how your links are performing across the web with <br/> our advanced statistics
				dashboard.
			</p>
			<div className={style.statistic}>
				<div className={style.statistic__card}>
					<div className={style.statistic__icon}>
						<img src={recognitionImg} alt="recognitionImg" />
					</div>
					<div className={style.statistic__description}>
						<h3>Brand Recognition</h3>
						<p>
							Boost your brand recognition with each click. generick links don`t mean a
							thing. Branded links help instil confidence in your content
						</p>
					</div>
				</div>
				<div className={style.statistic__card}>
					<div className={style.statistic__icon}>
						<img src={recordsImg} alt="recordsImg" />
					</div>
					<div className={style.statistic__description}>
						<h3>Detailed Records</h3>
						<p>
							Gain insights into who is clicking your links. Knowing when and where people
							engage whith your content helps inform better decisions.
						</p>
					</div>
				</div>
				<div className={style.statistic__card}>
					<div className={style.statistic__icon}>
						<img src={customizableImg} alt="customizableImg" />
					</div>
					<div className={style.statistic__description}>
						<h3>Fully Customizable</h3>
						<p>
							Improve brand awareness and content discoverability through customizable
							link, supercharging audience engagement.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistic;
