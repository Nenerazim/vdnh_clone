import {BaseApiService} from '@app/Services/BaseApiService';
import type {IErrorComponent} from '@app/Interfaces/ErrorComponent';

export class ErrorService extends BaseApiService {
	/**
	 * Получение текущей контентной страницы
	 */
	public getCurrent() {
		return useAsyncData('error', async () => {
			try {
				const page = await this.httpService.get<IErrorComponent>(`/v1/not_found`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
