import style from './Results.module.scss';
import ResultItem from './ResultItem/ResultItem';

const Results = ({ shortenLinks }) => {
	if (shortenLinks.length > 0) {
		return (
			<div className={style.container}>
				{shortenLinks.map(resItem => (
					<ResultItem
						key={resItem.code}
						originalLink={resItem.original_link}
						shortLink={resItem.short_link}
					/>
				))}
			</div>
		);
	}
};

export default Results;
