import style from './RoundedButton.module.scss';

export const RoundedButton = ({ children, onClick, isCopied }) => {
	return (
		<>
			<button
				onClick={onClick && onClick}
				type="submit"
				className={`${style.rounded_btn} ${isCopied && style.copied}`}>
				{children}
			</button>
		</>
	);
};
