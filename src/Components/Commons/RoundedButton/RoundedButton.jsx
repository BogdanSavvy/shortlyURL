import style from './RoundedButton.module.scss';

export const RoundedButton = ({ children }) => {
	return (
		<>
			<button type='submit' className={style.rounded_btn}>{children}</button>
		</>
	);
};
