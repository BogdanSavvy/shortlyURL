import style from './Input.module.scss';

export const Input = () => {
	return (
		<>
			<input
				className={`${style.input}`}
				type="text"
				placeholder="Shorten a link here..."
			/>
		</>
	);
};
