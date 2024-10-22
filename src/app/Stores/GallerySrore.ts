import {defineStore} from 'pinia';
import {GalleryService} from '@app/Services/GalleryService';

export const useGalleryStore = defineStore('Gallery', () => {
	const service = new GalleryService();

	const getCurrentGallery = async (slug?: string) => {
		return await service.getCurrent(slug).then(({data, error}) => {
			service.handleError(data.value, error.value);
			return {
				page: data.value
			};
		});
	};

	return {getCurrentGallery};
});
