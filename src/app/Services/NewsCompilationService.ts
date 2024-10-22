import {BaseApiService} from '@app/Services/BaseApiService';
import type {INewsCompilation} from '@app/Interfaces/NewsCompilation/NewsCompilation';

export class NewsCompilationService extends BaseApiService {
	/**
	 * Получение текущей Общих новостей страницы
	 */
	public getCurrent(slug?: string) {
		return useAsyncData('gallery', async () => {
			try {
				const page = await this.httpService.get<INewsCompilation>(`/v1/news${slug}`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
