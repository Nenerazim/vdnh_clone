import {BaseApiService} from '@app/Services/BaseApiService';
import type {IEvent} from '@app/Interfaces/Event';

export class EventService extends BaseApiService {
	public static FREE_EVENT = 'free';
	public static PAID_EVENT = 'paid';

	/**
	 * Получение текущего события
	 */
	public getCurrent(slug: string) {
		return useAsyncData('event', async () => {
			try {
				const page = await this.httpService.get<IEvent>(`/v1/events/${slug}`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
