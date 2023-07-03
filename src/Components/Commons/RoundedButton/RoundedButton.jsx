import style from './RoundedButton.module.scss';

export const RoundedButton = ({ children, onClick }) => {
	return (
		<>
			<button onClick={onClick && onClick} type="submit" className={style.rounded_btn}>
				{children}
			</button>
		</>
	);
};
