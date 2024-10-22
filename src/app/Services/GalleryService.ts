import {BaseApiService} from '@app/Services/BaseApiService';
import type {IGallery} from '@app/Interfaces/Gallery';

export class GalleryService extends BaseApiService {
	/**
	 * Получение текущей галереи страницы
	 */
	public getCurrent(slug?: string) {
		return useAsyncData('gallery', async () => {
			try {
				const page = await this.httpService.get<IGallery>(`/v1/gallery${slug}`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
