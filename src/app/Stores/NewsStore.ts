import {defineStore} from 'pinia';
import {NewsService} from '@app/Services/NewsService';
import {ComponentHelper} from '@app/Helpers/ComponentHelper';
import {useColorStore} from '@app/Stores/ColorStore';
import type {INewsItem} from '@app/Interfaces/News';

export const useNewsStore = defineStore('news', () => {
	const service = new NewsService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);

	const getCurrentNewsItem = async (slug: string) => {
		return await service.getCurrent(slug).then(async ({data, error}) => {
			service.handleError(data.value, error.value);
			colorStore.setColor(data.value?.color);
			return {
				page: data.value,
				components: await ComponentHelper.getNamedComponents<INewsItem['components']>(data.value?.components)
				// componentNavigation: ComponentHelper.createTitledIndexedList(data.value?.components)
			};
		});
	};

	return {getCurrentNewsItem, globalColor};
});
