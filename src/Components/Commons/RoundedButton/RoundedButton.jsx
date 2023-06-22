import style from './RoundedButton.module.scss';

export const RoundedButton = ({ children }) => {
	return (
		<>
			<button className={style.rounded_btn}>{children}</button>
		</>
	);
};
