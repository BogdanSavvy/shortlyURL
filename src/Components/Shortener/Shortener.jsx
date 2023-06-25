import style from './Shortener.module.scss';
import { Input } from '../Commons/Input/Input';
import { RoundedButton } from '../Commons/RoundedButton/RoundedButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getShortenLink } from '../../api/api';

const Shortener = () => {
	const formik = useFormik({
		initialValues: { link: '' },
		onSubmit: values => {
			console.log('submit', values);
			getShortenLink(values.link);
		},
		validationSchema: Yup.object().shape({
			link: Yup.string().required('This field is required'),
		}),
	});

	return (
		<div className={style.shortener}>
			<div className={style.shortener__container}>
				<form onSubmit={formik.handleSubmit}>
					<Input
						errors={formik.errors}
						touched={formik.touched}
						name="link"
						value={formik.values.link}
						onChange={formik.handleChange}
					/>
					<RoundedButton type="submit">Shorten it!</RoundedButton>
				</form>
			</div>
		</div>
	);
};

export default Shortener;
