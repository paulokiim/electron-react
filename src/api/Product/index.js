import axios from 'axios';

const checkExistence = async (params) => {
	const response = await axios.get(
		'https://crawler-306401.uc.r.appspot.com/ad/check-existence',
		{
			params,
		}
	);

	return response.data;
};

const getAll = async () => {
	const response = await axios.get(
		'https://crawler-306401.uc.r.appspot.com/ad/get-all'
	);

	return response.data;
};

const create = async (params) => {
	const response = await axios.post(
		'https://crawler-306401.uc.r.appspot.com/ad/create',
		params
	);

	return response.data;
};

export default { checkExistence, getAll, create };
