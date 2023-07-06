import style from './Header.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { OvalButton } from '../Commons/OvalButton/OvalButton';
import logo from '../../images/logo.svg';

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleBurger = () => setIsActive(!isActive);

	return (
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
						<div className={style.header__actions}>
							<OvalButton modified={true}>Login</OvalButton>
							<OvalButton>Sign up</OvalButton>
						</div>
					</nav>
					<div
						className={`${style.header__burger} ${isActive ? style.opened : ''}`}
						onClick={toggleBurger}>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
