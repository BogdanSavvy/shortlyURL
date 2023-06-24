import style from './Shortener.module.scss';
import { Input } from '../Commons/Input/Input';
import { RoundedButton } from '../Commons/RoundedButton/RoundedButton';

const Shortener = () => {
	return (
		<div className={style.container}>
			<form action="#">
				<Input />
				<RoundedButton>Shorten it!</RoundedButton>
			</form>
		</div>
	);
};

export default Shortener;
