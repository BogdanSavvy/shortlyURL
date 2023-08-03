import style from './ResultItem.module.scss';
import { useState } from 'react';
import { RoundedButton } from '../../Commons/RoundedButton/RoundedButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Snackbar, Alert } from '@mui/material';

const ResultItem = ({ originalLink, shortLink, deleteDocFromFirestore, docId }) => {
	const [isCopied, setIsCopied] = useState(false);
	const [open, setOpen] = useState(false);

	const copyText = text => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setIsCopied(true);
				setOpen(true);
			})
			.catch(err => {
				console.error('Помилка копіювання тексту: ', err);
				setOpen(true);
			});
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<>
			<div className={style.container}>
				<div className={style.oldLink}>{originalLink}</div>
				<div className={style.result}>
					<div className={style.result__newLink}>{shortLink}</div>
					<div className={style.result__actions}>
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
						{docId && <button className={style.deleteBtn} onClick={() => deleteDocFromFirestore(docId)}>
							<FontAwesomeIcon icon={faTrash} size='2xl' />
						</button>}
					</div>
				</div>
			</div>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					Your short link has been copied successfully!
				</Alert>
			</Snackbar>
		</>
	);
};

export default ResultItem;
