export const getShortenLink = link => {
	const myHeaders = new Headers();
	myHeaders.append('apikey', process.env.REACT_APP_URL_SHORTENER_API_KEY);

	const raw = link;

	const requestOptions = {
		method: 'POST',
		redirect: 'follow',
		headers: myHeaders,
		body: raw,
	};

	return fetch('https://api.apilayer.com/short_url/hash', requestOptions);
};
