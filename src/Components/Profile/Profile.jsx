import style from './Profile.module.scss';
import Shortener from '../Shortener/Shortener';
import Results from '../Results/Results';
import Avatar from '@mui/material/Avatar';
import { teal } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase-config';
import {
	collection,
	addDoc,
	onSnapshot,
	doc,
	deleteDoc,
	serverTimestamp,
	orderBy,
	query,
} from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

const Profile = ({ authUser, setShortenLinks, shortenLinks }) => {
	//*A function that adds a result to Firestore
	const addLinksToFirestore = async response => {
		try {
			return await addDoc(collection(db, 'shortlinks'), {
				code: response.hash,
				originalLink: response.long_url,
				shortLink: response.short_url,
				userId: authUser.uid,
				createdAt: serverTimestamp(),
			});
		} catch (error) {
			console.error('Error adding document: ', error);
		}
	};

	const [fireStoreData, setFireStoreData] = useState([]);

	//*A function that receives data from Firestore and subscribes to updates
	const getLinksFromFirestore = () => {
		onSnapshot(
			query(collection(db, 'shortlinks'), orderBy('createdAt', 'desc')),
			snapshot => {
				const array = [];
				snapshot.docs.forEach(doc => array.push({ ...doc.data(), docId: doc.id }));
				setFireStoreData(array);
			}
		);
	};

	//*A function that deleting doc from Firestore
	const deleteDocFromFirestore = docId => {
		const docRef = doc(db, 'shortlinks', docId);
		deleteDoc(docRef);
	};

	//*Getting data from Firestore
	useEffect(() => {
		getLinksFromFirestore();
	}, []);

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
							</div>
							<p className={style.profileCard__email}>{authUser.email}</p>
							<button
								className={style.profileCard__logOutBtn}
								onClick={async () => await signOut()}>
								Log out <FontAwesomeIcon icon={faRightFromBracket} />
							</button>
						</div>
						<div className={style.shortenerBlock}>
							<Shortener
								setFireStoreData={setFireStoreData}
								authUser={authUser}
								addLinksToFirestore={addLinksToFirestore}
								shortenLinks={shortenLinks}
								setShortenLinks={setShortenLinks}
							/>
						</div>
					</div>
					<Results
						deleteDocFromFirestore={deleteDocFromFirestore}
						fireStoreData={fireStoreData}
						authUser={authUser}
						shortenLinks={shortenLinks}
					/>
				</div>
			)}
		</>
	);
};

export default Profile;
