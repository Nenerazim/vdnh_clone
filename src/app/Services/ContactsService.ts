import {BaseApiService} from '@app/Services/BaseApiService';
import type {IContacts} from '@app/Interfaces/Contacts';

export class ContactsService extends BaseApiService {
	/**
	 * Получение текущей Контактов
	 */
	public getCurrent(slug: string) {
		return useAsyncData('contacts', async () => {
			try {
				const page = await this.httpService.get<IContacts>(`/v1/contacts/${slug}`);
				return page.data;
			} catch (e) {
				return null;
			}
		});
	}
}
