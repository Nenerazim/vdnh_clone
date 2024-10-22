import {defineStore} from 'pinia';
import {ContentService} from '@app/Services/ContentService';
import {ComponentHelper} from '@app/Helpers/ComponentHelper';
import {useColorStore} from '@app/Stores/ColorStore';
import type {IContent} from '@app/Interfaces/Content';

export const useContentStore = defineStore('content', () => {
	const service = new ContentService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);

	const getCurrentContentPage = async (slug: string) => {
		return await service.getCurrent(slug).then(async ({data, error}) => {
			service.handleError(data.value, error.value);
			colorStore.setColor(data.value?.color);
			return {
				page: data.value,
				components: await ComponentHelper.getNamedComponents<IContent['components']>(data.value?.components),
				componentNavigation: ComponentHelper.createTitledIndexedList(data.value?.components)
			};
		});
	};

	return {getCurrentContentPage, globalColor};
});
