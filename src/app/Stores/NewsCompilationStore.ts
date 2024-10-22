import {defineStore} from 'pinia';
import {NewsCompilationService} from '@app/Services/NewsCompilationService';
import {ComponentHelper} from '@app/Helpers/ComponentHelper';
import type {INewsCompilation} from '@app/Interfaces/NewsCompilation/NewsCompilation';
import {useColorStore} from '@app/Stores/ColorStore';

export const useNewsCompilationStore = defineStore('NewsCompilation', () => {
	const service = new NewsCompilationService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);

	const getCurrentNewsCompilation = async (slug?: string) => {
		return await service.getCurrent(slug).then(async ({data, error}) => {
			service.handleError(data.value, error.value);
			colorStore.setColor(data.value?.color);
			return {
				page: data.value,
				components: await ComponentHelper.getComponentsWithTemplate<INewsCompilation['components']>(data.value?.components)
			};
		});
	};

	return {getCurrentNewsCompilation, globalColor};
});
