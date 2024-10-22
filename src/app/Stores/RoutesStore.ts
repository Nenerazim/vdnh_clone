import {defineStore} from 'pinia';
import {RoutesService} from '@app/Services/RoutesService';
import {useColorStore} from '@app/Stores/ColorStore';
import {ComponentHelper} from '@app/Helpers/ComponentHelper';
import type {IRoutes} from '@app/Interfaces/Routes';
export const useRoutesStore = defineStore('routes', () => {
	const service = new RoutesService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);

	const getCurrentRoutes = async (slug: string) => {
		return await service.getCurrent(slug).then(async ({data, error}) => {
			service.handleError(data.value, error.value);
			colorStore.setColor(data.value?.color);
			return {
				page: data.value,
				components: await ComponentHelper.getNamedComponents<IRoutes['components']>(data.value?.components)
			};
		});
	};

	return {getCurrentRoutes, globalColor};
});
