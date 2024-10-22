import {defineStore} from 'pinia';
import {DisclosureService} from '@app/Services/DisclosureService';
import {ComponentHelper} from '@app/Helpers/ComponentHelper';
import {useColorStore} from '@app/Stores/ColorStore';
import type {IDisclosure} from '@app/Interfaces/Disclosure';

export const useDisclosureStore = defineStore('disclosure', () => {
	const service = new DisclosureService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);

	const getCurrentDisclosure = async (slug: string) => {
		return await service.getCurrent(slug).then(async ({data, error}) => {
			service.handleError(data.value, error.value);
			colorStore.setColor(data.value?.color);
			return {
				page: data.value,
				components: await ComponentHelper.getNamedComponents<IDisclosure['components']>(data.value?.components)
			};
		});
	};

	return {getCurrentDisclosure, globalColor};
});
