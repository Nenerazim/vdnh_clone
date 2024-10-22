import {BaseApiService} from '@app/Services/BaseApiService';
import type {IFooter, NavbarLink} from '@app/Interfaces/Navigation';

export class NavigationService extends BaseApiService {
	/**
	 * Получение шапки
	 */
	public getNavbar() {
		return useAsyncData('navbar', async () => {
			try {
				const navbar = await this.httpService.get<NavbarLink[]>('/v1/navigation/header');
				return navbar.data;
			} catch (e) {
				return null;
			}
		});
	}

	/**
	 * Получение подвала
	 */
	public getFooter() {
		return useAsyncData('footer', async () => {
			try {
				const footer = await this.httpService.get<IFooter>('/v1/navigation/footer');
				return footer.data;
			} catch (e) {
				return null;
			}
		});
	}
}
