import {BaseApiService} from '@app/Services/BaseApiService';
import type {IContent} from '@app/Interfaces/Content';

export class ContentService extends BaseApiService {
	/**
	 * Получение текущей контентной страницы
	 */
	public getCurrent(slug: string) {
		return useAsyncData('content', async () => {
			try {
				const page = await this.httpService.get<IContent>(`/v1/content/${slug}`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
