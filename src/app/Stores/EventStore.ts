import {defineStore} from 'pinia';
import {EventService} from '@app/Services/EventService';
import {ComponentHelper} from '@app/Helpers/ComponentHelper';
import {useColorStore} from '@app/Stores/ColorStore';
import type {IEvent} from '@app/Interfaces/Event';

export const useEventStore = defineStore('event', () => {
	const service = new EventService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);

	const getCurrentEvent = async (slug: string) => {
		return await service.getCurrent(slug).then(async ({data, error}) => {
			service.handleError(data.value, error.value);
			colorStore.setColor(data.value?.color);
			return {
				page: data.value,
				components: await ComponentHelper.getNamedComponents<IEvent['components']>(data.value?.components),
				componentNavigation: ComponentHelper.createTitledIndexedList(data.value?.components)
			};
		});
	};

	return {getCurrentEvent, globalColor};
});
