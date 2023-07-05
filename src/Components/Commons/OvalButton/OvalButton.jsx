import style from './OvalButton.module.scss';

export const OvalButton = ({ children, modified }) => {
	return (
		<>
			<button className={`${style.oval_btn} ${modified ? style.mod : ''}`}>
				{children}
			</button>
		</>
	);
};
