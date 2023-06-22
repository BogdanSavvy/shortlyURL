import style from './OvalButton.module.scss';

export const OvalButton = ({ children }) => {
	return (
		<>
			<button className={style.oval_btn}>{children}</button>
		</>
	);
};
