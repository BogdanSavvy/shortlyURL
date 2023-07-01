import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.shrtco.de/v2/',
});

export const getShortenLink = link => {
	return instance.get(`shorten?url=${link}`);
};
