import {BaseApiService} from '@app/Services/BaseApiService';
import type {IDisclosure} from '@app/Interfaces/Disclosure';

export class DisclosureService extends BaseApiService {
	/**
	 * Получение текущей контентной страницы
	 */
	public getCurrent(slug: string) {
		return useAsyncData('content', async () => {
			try {
				const page = await this.httpService.get<IDisclosure>(`/v1/disclosure/${slug}`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
