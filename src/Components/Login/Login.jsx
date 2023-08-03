import style from './Login.module.scss';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase-config';
import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { NavLink, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Login = ({ authUser }) => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const [showSnackBar, setShowSnackBar] = useState(false);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setShowSnackBar(false);
	};

	const formik = useFormik({
		initialValues: { email: '', password: '' },
		onSubmit: values => {
			signInWithEmailAndPassword(values.email, values.password);
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email('Invalid email format').required('Required'),
			password: Yup.string()
				.required('This field is required')
				.min(8, 'Password should be 8 chars minimum.')
				.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
		}),
	});

	useEffect(() => {
		if (error) {
			setShowSnackBar(true);
		}
	}, [error]);

	return authUser ? (
		<Navigate to="/profile" />
	) : (
		<div className={style.loginScreen}>
			<div className={style.loginBox}>
				<h2>log in</h2>
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
					<Button variant="contained" fullWidth type="submit">
						Submit
					</Button>
				</form>
				<NavLink to="/">
					<FontAwesomeIcon className={style.closeIcon} size="xl" icon={faXmark} />
				</NavLink>
				<div className={style.createAcc}>
					If you don`t have account: <NavLink to="/signUp">Create account</NavLink>
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

export default Login;
