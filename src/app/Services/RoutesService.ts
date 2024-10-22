import {BaseApiService} from '@app/Services/BaseApiService';
import type {IRoutes} from '@app/Interfaces/Routes';

/**
 * Получение Маршрутов
 */
export class RoutesService extends BaseApiService {
	public getCurrent(slug: string) {
		return useAsyncData('routes', async () => {
			try {
				const page = await this.httpService.get<IRoutes>(`/v1/routes/${slug}`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
