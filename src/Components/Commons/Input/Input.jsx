import style from './Input.module.scss';

export const Input = ({ name, value, onChange, errors, touched }) => {
	return (
		<>
			<input
				className={`${style.input} ${errors && touched.link ? style.error : ''}`}
				type="text"
				placeholder="Shorten a link here..."
				name={name}
				value={value}
				onChange={onChange}
			/>
			{errors && touched.link && <div className={style.errorMessage}>{errors.link}</div>}
		</>
	);
};
