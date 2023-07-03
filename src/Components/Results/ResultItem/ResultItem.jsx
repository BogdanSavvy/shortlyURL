import style from './ResultItem.module.scss';
import { RoundedButton } from '../../Commons/RoundedButton/RoundedButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const ResultItem = ({ originalLink, shortLink }) => {
	const copyText = text => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('Текст скопійовано!');
			})
			.catch(err => {
				console.error('Помилка копіювання тексту: ', err);
			});
	};
	return (
		<div className={style.container}>
			<div className={style.oldLink}>{originalLink}</div>
			<div className={style.result}>
				<div className={style.result__newLink}>{shortLink}</div>
				<RoundedButton onClick={() => copyText(shortLink)}>
					Copy <FontAwesomeIcon icon={faCopy} />
				</RoundedButton>
			</div>
		</div>
	);
};

export default ResultItem;
