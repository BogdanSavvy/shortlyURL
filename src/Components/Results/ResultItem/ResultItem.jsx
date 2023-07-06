import style from './ResultItem.module.scss';
import { useState } from 'react';
import { RoundedButton } from '../../Commons/RoundedButton/RoundedButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ResultItem = ({ originalLink, shortLink }) => {
	const [isCopied, setIsCopied] = useState(false);
	const copyText = text => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('Текст скопійовано!');
				setIsCopied(true);
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
				<RoundedButton isCopied={isCopied} onClick={() => copyText(shortLink)}>
					{!isCopied ? (
						<>
							Copy <FontAwesomeIcon size="lg" icon={faCopy} />
						</>
					) : (
						<>
							Copied <FontAwesomeIcon size="lg" icon={faCheck} />
						</>
					)}
				</RoundedButton>
			</div>
		</div>
	);
};

export default ResultItem;
