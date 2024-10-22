import {BaseApiService} from '@app/Services/BaseApiService';
import type {INewsItem} from '@app/Interfaces/News';

export class NewsService extends BaseApiService {
	/**
	 * Получение текущей новости
	 */
	public getCurrent(slug: string) {
		return useAsyncData('news', async () => {
			try {
				const page = await this.httpService.get<INewsItem>(`/v1/news/${slug}`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
