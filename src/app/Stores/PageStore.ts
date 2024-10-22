import {defineStore} from 'pinia';
import {PageService} from '@app/Services/PageService';
import {ComponentHelper} from '@app/Helpers/ComponentHelper';
import {useColorStore} from '@app/Stores/ColorStore';
import type {IPage} from '@app/Interfaces/Page';

export const usePageStore = defineStore('page', () => {
	const service = new PageService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);

	const getCurrentPage = async (slug: string = '') => {
		return await service.getCurrent(slug).then(async ({data, error}) => {
			service.handleError(data.value, error.value);
			colorStore.setColor(data.value?.color);
			return {
				page: data.value,
				components: await ComponentHelper.getComponentsWithTemplate<IPage['components']>(data.value?.components)
			};
		});
	};

	return {getCurrentPage, globalColor};
});
