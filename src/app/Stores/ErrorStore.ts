import {defineStore} from 'pinia';
import {ErrorService} from '@app/Services/ErrorService';

export const useErrorStore = defineStore('error', () => {
	const service = new ErrorService();

	const getCurrentError = async () => {
		return await service.getCurrent().then(({data, error}) => {
			service.handleError(data.value, error.value);
			return {
				page: data.value
			};
		});
	};

	return {getCurrentError};
});
