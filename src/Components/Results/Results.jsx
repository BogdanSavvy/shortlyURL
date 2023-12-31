import style from './Results.module.scss';
import ResultItem from './ResultItem/ResultItem';

const Results = ({ shortenLinks, authUser, fireStoreData, deleteDocFromFirestore }) => {
	return (
		<>
			{authUser ? (
				<div className={style.container}>
					{fireStoreData.map(
						doc =>
							doc.userId === authUser.uid && (
								<ResultItem
									key={doc.code}
									originalLink={doc.originalLink}
									shortLink={doc.shortLink}
									docId={doc.docId}
									deleteDocFromFirestore={deleteDocFromFirestore}
								/>
							)
					)}
				</div>
			) : (
				<div className={style.container}>
					{shortenLinks.map(resultItem => (
						<ResultItem
							key={resultItem.hash}
							originalLink={resultItem.long_url}
							shortLink={resultItem.short_url}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default Results;
