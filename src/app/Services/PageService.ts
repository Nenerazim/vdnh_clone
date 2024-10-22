import type {IPage} from '@app/Interfaces/Page';
import {BaseApiService} from '@app/Services/BaseApiService';

export class PageService extends BaseApiService {
	/**
	 * Получение текущей основной страницы
	 */
	public getCurrent(slug: string) {
		return useAsyncData('page', async () => {
			const page = await this.httpService.get<IPage>(`/v1/page/${slug}`);
			return page.data;
		});
	}
}
