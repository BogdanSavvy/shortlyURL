import style from './SignUp.module.scss';
import { useEffect, useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase-config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SignUp = ({ authUser }) => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const [showSnackBar, setShowSnackBar] = useState(false);

	useEffect(() => {
		if (error) {
			setShowSnackBar(true);
		}
	}, [error]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setShowSnackBar(false);
	};

	const formik = useFormik({
		initialValues: { email: '', password: '', passwordConfirmation: '' },
		onSubmit: values => {
			createUserWithEmailAndPassword(values.email, values.password);
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email('Invalid email format').required('Required'),
			password: Yup.string()
				.required('This field is required')
				.min(8, 'Password should be 8 chars minimum.')
				.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
			passwordConfirmation: Yup.string().oneOf(
				[Yup.ref('password'), null],
				'Passwords must match'
			),
		}),
	});

	return authUser ? (
		<Navigate to="/profile" />
	) : (
		<div className={style.signUpScreen}>
			<div className={style.signUpBox}>
				<h2>sign up</h2>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						fullWidth
						required
						variant="outlined"
						id="email"
						name="email"
						label="Email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						fullWidth
						required
						variant="outlined"
						id="password"
						name="password"
						label="Password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<TextField
						fullWidth
						required
						variant="outlined"
						id="passwordConfirmation"
						name="passwordConfirmation"
						label="Confirm Password"
						type="password"
						value={formik.values.passwordConfirmation}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={
							formik.touched.passwordConfirmation &&
							Boolean(formik.errors.passwordConfirmation)
						}
						helperText={
							formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
						}
					/>
					<Button variant="contained" fullWidth type="submit">
						Submit
					</Button>
				</form>
				<NavLink to="/">
					<FontAwesomeIcon className={style.closeIcon} size="xl" icon={faXmark} />
				</NavLink>
				<div className={style.goToLogin}>
					If you allready have account: <NavLink to="/login">Log in</NavLink>
				</div>
			</div>
			{error && (
				<Snackbar open={showSnackBar} onClose={handleClose} autoHideDuration={10000}>
					<Alert
						onClose={handleClose}
						severity="error"
						sx={{ width: '100%', fontSize: '18px' }}>
						{error.message}
					</Alert>
				</Snackbar>
			)}
		</div>
	);
};

export default SignUp;
