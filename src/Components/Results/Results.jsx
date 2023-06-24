import style from './Results.module.scss';
import ResultItem from './ResultItem/ResultItem';


const Results = () => {
	return (
		<>
			<div className={style.container}>
				<ResultItem/>
				<ResultItem/>
				<ResultItem/>
			</div>
		</>
	);
};

export default Results;