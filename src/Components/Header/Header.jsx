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

const Header = ({ user }) => {
	const [isActive, setIsActive] = useState(false);

	const [signOut] = useSignOut(auth);

	const toggleBurger = () => setIsActive(!isActive);

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
								<img src={logo} alt="logo" />
							</NavLink>
						</div>
						<nav className={`${style.navBody} ${isActive ? style.opened : ''}`}>
							<ul className={style.navBody__list}>
								<li>
									<NavLink to="/features" className={style.navBody__link}>
										Features
									</NavLink>
								</li>
								<li>
									<NavLink to="/pricing" className={style.navBody__link}>
										Pricing
									</NavLink>
								</li>
								<li>
									<NavLink to="/resources" className={style.navBody__link}>
										Resources
									</NavLink>
								</li>
							</ul>
							{!user ? (
								<div className={style.header__actions}>
									<OvalButton modified={true}>
										<NavLink to="/login">Log in</NavLink>
									</OvalButton>
									<OvalButton>
										<NavLink to="/signUp">Sign up</NavLink>
									</OvalButton>
								</div>
							) : (
								<div className={style.header__miniProfile}>
									{user && user.photoURL ? (
										<NavLink to="profile">
											<Avatar
												alt="User Avatar"
												sx={{ width: 46, height: 46 }}
												src={user.photoURL}
											/>
										</NavLink>
									) : (
										<NavLink to="profile">
											<Avatar sx={{ bgcolor: teal[400], width: 46, height: 46 }}>
												{user.email[0]}
											</Avatar>
										</NavLink>
									)}
									{user.displayName && <p>{user.displayName}</p>}
									<button title="Log Out" onClick={async () => await signOut()}>
										<FontAwesomeIcon icon={faRightFromBracket} />
									</button>
								</div>
							)}
						</nav>
						<div
							className={`${style.header__burger} ${isActive ? style.opened : ''}`}
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
