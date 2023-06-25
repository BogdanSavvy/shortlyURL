import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.shrtco.de/v2/',
});

export const getShortenLink = async link => {
	const response = await instance.get(`shorten?url=${link}`);
	return response;
};
