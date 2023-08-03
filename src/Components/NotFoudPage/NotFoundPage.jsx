import style from './NotFoundPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';

const NotFoudPage = () => {
	return (
		<div className={style.container}>
			<div className={style.notFoundPage}>
				Ooops, Can`t Foud Page
				<br />
				Come Back Later
				<br />
				<FontAwesomeIcon icon={faFaceSadTear} size="2xl" />
			</div>
		</div>
	);
};

export default NotFoudPage;
