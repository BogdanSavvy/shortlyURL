import style from './Header.module.scss';
import { Logo } from './HeaderComponents/Logo';
import { Navigation } from './HeaderComponents/Navigation';
import { OvalButton } from '../Commons/OvalButton/OvalButton';

const Header = () => {
	return (
		<header className={style.header}>
			<Logo className={style.header__logo} />
			<div className={style.header__menuBody}>
				<Navigation />
				<div className={style.header__action}>
					<OvalButton>Login</OvalButton>
					<OvalButton>Sign up</OvalButton>
				</div>
			</div>
		</header>
	);
};

export default Header;
