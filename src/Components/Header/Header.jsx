import style from './Header.module.scss';
import logo from '../../images/logo.svg';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { OvalButton } from '../Commons/OvalButton/OvalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../firebase/firebase-config';
import { useSignOut } from 'react-firebase-hooks/auth';
import Avatar from '@mui/material/Avatar';
import { teal } from '@mui/material/colors';

const Header = ({ authUser }) => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);
	const toggleBurger = () => setIsBurgerActive(!isBurgerActive);

	const [signOut] = useSignOut(auth);

	const routes = [
		{
			handleclick: () => {
				setIsBurgerActive(false);
			},
			name: 'Features',
			path: '/features',
		},
		{
			handleclick: () => {
				setIsBurgerActive(false);
			},
			name: 'Pricing',
			path: '/pricing',
		},
		{
			handleclick: () => {
				setIsBurgerActive(false);
			},
			name: 'Resources',
			path: '/resources',
		},
	];

	//*Adding pretty hover animation on links
	useEffect(() => {
		const handleMouseEnter = e => {
			const tolerance = 10;
			const elem = e.target;
			const left = 0;
			const right = elem.clientWidth;

			let x = e.pageX - elem.offsetLeft;

			if (x - tolerance < left) x = left;
			if (x + tolerance > right) x = right;

			elem.style.setProperty('--x', `${x}px`);
		};

		const handleMouseLeave = e => {
			const elem = e.target;
			elem.style.removeProperty('--x');
		};

		const links = document.querySelectorAll('a');
		links.forEach(elem => {
			elem.addEventListener('mouseenter', handleMouseEnter);
			elem.addEventListener('mouseleave', handleMouseLeave);
		});

		return () => {
			links.forEach(elem => {
				elem.removeEventListener('mouseenter', handleMouseEnter);
				elem.removeEventListener('mouseleave', handleMouseLeave);
			});
		};
	}, []);

	return (
		<>
			<header className={style.header}>
				<div className={style.container}>
					<div className={style.header__menuBody}>
						<div className={style.header__logo}>
							<NavLink to="/">
								<img
									onClick={() => {
										setIsBurgerActive(false);
									}}
									src={logo}
									alt="logo"
								/>
							</NavLink>
						</div>
						<nav className={`${style.navBody} ${isBurgerActive ? style.opened : ''}`}>
							<ul className={style.navBody__list}>
								{routes.map(route => (
									<li onClick={route.handleclick}>
										<NavLink
											style={({ isActive }) => {
												return {
													color: isActive ? 'black' : '',
												};
											}}
											to={route.path}
											className={style.navBody__link}>
											{route.name}
										</NavLink>
									</li>
								))}
							</ul>
							{!authUser ? (
								<div className={style.header__actions}>
									<OvalButton
										onClick={() => {
											setIsBurgerActive(false);
										}}
										modified={true}>
										<NavLink to="/login">Log in</NavLink>
									</OvalButton>
									<OvalButton
										onClick={() => {
											setIsBurgerActive(false);
										}}>
										<NavLink to="/signUp">Sign up</NavLink>
									</OvalButton>
								</div>
							) : (
								<div className={style.header__miniProfile}>
									{authUser && authUser.photoURL ? (
										<NavLink to="profile">
											<Avatar
												onClick={() => {
													setIsBurgerActive(false);
												}}
												alt="User Avatar"
												sx={{ width: 46, height: 46 }}
												src={authUser.photoURL}
											/>
										</NavLink>
									) : (
										<NavLink to="profile">
											<Avatar
												onClick={() => {
													setIsBurgerActive(false);
												}}
												sx={{ bgcolor: teal[400], width: 46, height: 46 }}>
												{authUser.email[0]}
											</Avatar>
										</NavLink>
									)}
									{authUser.displayName && <p>{authUser.displayName}</p>}
									<button title="Log Out" onClick={async () => await signOut()}>
										<FontAwesomeIcon icon={faRightFromBracket} />
									</button>
								</div>
							)}
						</nav>
						<div
							className={`${style.header__burger} ${isBurgerActive ? style.opened : ''}`}
							onClick={toggleBurger}>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
