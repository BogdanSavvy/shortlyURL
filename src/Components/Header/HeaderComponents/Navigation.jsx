import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<nav className={style.navBody}>
			<ul className={style.navBody__list}>
				<NavLink to="/features" className={style.navBody__link}>
					Features
				</NavLink>
				<NavLink to="/pricing" className={style.navBody__link}>
					Pricing
				</NavLink>
				<NavLink to="/resources" className={style.navBody__link}>
					Resources
				</NavLink>
			</ul>
		</nav>
	);
};
