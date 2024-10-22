import {defineStore} from 'pinia';
import {ContactsService} from '@app/Services/ContactsService';
import {useColorStore} from '@app/Stores/ColorStore';
export const useContactsStore = defineStore('contacts', () => {
	const service = new ContactsService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);

	const getCurrentContacts = async (slug: string) => {
		return await service.getCurrent(slug).then(({data, error}) => {
			service.handleError(data.value, error.value);
			colorStore.setColor(data.value?.color);
			return {
				contacts: data.value
			};
		});
	};

	return {getCurrentContacts, globalColor};
});
