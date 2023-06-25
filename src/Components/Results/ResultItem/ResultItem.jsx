import style from './ResultItem.module.scss';
import { RoundedButton } from '../../Commons/RoundedButton/RoundedButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';


const ResultItem = () => {
	return (
		<div className={style.container}>
			<div className={style.oldLink}>https://www.youtube.com/watch?v=A41upAJW6e8&ab_channel=%D0%A0%D0%91%D0%9A-%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0</div>
			<div className={style.result}>
				<div className={style.result__newLink}>https://web.telegram.org/</div>
				<RoundedButton>Copy <FontAwesomeIcon icon={faCopy} /></RoundedButton>
			</div>
		</div>
	);
};

export default ResultItem;
