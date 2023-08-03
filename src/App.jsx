import { useState, useRef } from 'react';
import { auth } from './firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import Preloader from './Components/Commons/Preloader/Preloader';
import NotFoundPage from './Components/NotFoudPage/NotFoundPage';

const App = () => {
	const myRef = useRef(null);

	const [shortenLinks, setShortenLinks] = useState([]);

	const [user, loading] = useAuthState(auth);

	const scrollToElement = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				<>
					<Header authUser={user} />
					<Routes>
						<Route
							path="/"
							element={
								<LandingPage
									authUser={user}
									myRef={myRef}
									scrollToElement={scrollToElement}
									shortenLinks={shortenLinks}
									setShortenLinks={setShortenLinks}
								/>
							}
						/>
						<Route
							path="/profile"
							element={
								<Profile
									authUser={user}
									shortenLinks={shortenLinks}
									setShortenLinks={setShortenLinks}
								/>
							}
						/>
						<Route path="/login" element={<Login authUser={user} />} />
						<Route path="/signUp" element={<SignUp authUser={user} />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</>
			)}
		</>
	);
};

export default App;
