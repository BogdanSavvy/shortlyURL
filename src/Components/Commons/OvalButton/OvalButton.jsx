import style from './OvalButton.module.scss';

export const OvalButton = ({ children, modified, onClick }) => {
	return (
		<>
			<button
				onClick={onClick}
				className={`${style.oval_btn} ${modified ? style.mod : ''}`}>
				{children}
			</button>
		</>
	);
};
