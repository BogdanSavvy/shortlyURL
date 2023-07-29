import { Navigate } from 'react-router-dom';
import style from './Profile.module.scss';
import Shortener from '../Shortener/Shortener';
import Results from '../Results/Results';
import Avatar from '@mui/material/Avatar';
import { teal } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase-config';

const Profile = ({ authUser, setShortenLinks, shortenLinks }) => {
	const [signOut] = useSignOut(auth);

	return (
		<>
			{!authUser ? (
				<Navigate to="/" />
			) : (
				<div className={style.wrapper}>
					<div className={style.container}>
						<div className={style.profileCard}>
							<div className={style.profileCard__avatar}>
								{authUser.photoURl ? (
									<Avatar
										alt="User Avatar"
										sx={{ width: 60, height: 60 }}
										src={authUser.photoURL}
									/>
								) : (
									<Avatar sx={{ bgcolor: teal[400], width: 60, height: 60 }}>
										{authUser.email[0]}
									</Avatar>
								)}
								{authUser.displayName && <p>{authUser.displayName}</p>}
							</div>
							<p className={style.profileCard__email}>{authUser.email}</p>
							<button
								className={style.profileCard__logOutBtn}
								onClick={async () => await signOut()}>
								Log out <FontAwesomeIcon icon={faRightFromBracket} />
							</button>
						</div>
						<div className={style.shortenerBlock}>
							<Shortener shortenLinks={shortenLinks} setShortenLinks={setShortenLinks} />
						</div>
					</div>
					<Results shortenLinks={shortenLinks} />
				</div>
			)}
		</>
	);
};

export default Profile;
