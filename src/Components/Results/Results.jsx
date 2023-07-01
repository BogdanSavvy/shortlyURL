import style from './Results.module.scss';
import ResultItem from './ResultItem/ResultItem';

const Results = ({ shortenLinks }) => {
	if (shortenLinks.length > 0) {
		return (
			<div className={style.container}>
				<ResultItem />
			</div>
		);
	}
};

export default Results;
