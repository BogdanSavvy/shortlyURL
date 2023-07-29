import style from './Shortener.module.scss';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getShortenLink } from '../../api/api';
import { Input } from '../Commons/Input/Input';
import { RoundedButton } from '../Commons/RoundedButton/RoundedButton';
import { Snackbar, Alert } from '@mui/material';
import { TransitionRight } from '../Commons/TransitionComponent/TransitionRight';
import wavesBg from '../../images/bg-shorten-desktop.svg';

const Shortener = ({ setShortenLinks, shortenLinks, myRef }) => {
	const [showSnackBar, setShowSnackBar] = useState(false);
	const [serverMessage, setServerMessage] = useState('');

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setShowSnackBar(false);
	};

	const formik = useFormik({
		initialValues: { link: '' },
		onSubmit: values => {
			getShortenLink(values.link)
				.then(res => res.data.ok && setShortenLinks([...shortenLinks, res.data.result]))
				.catch(err => {
					setShowSnackBar(true);
					setServerMessage(err.response.data.error);
				});
			values.link = '';
		},
		validationSchema: Yup.object().shape({
			link: Yup.string().required('This field is required'),
		}),
	});

	return (
		<div ref={myRef}>
			<div className={style.shortener}>
				<div className={style.shortener__container}>
					<img src={wavesBg} alt="wavesBg" />
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
			<Snackbar
				open={showSnackBar}
				onClose={handleClose}
				autoHideDuration={5000}
				TransitionComponent={TransitionRight}>
				<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
					{serverMessage}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default Shortener;
