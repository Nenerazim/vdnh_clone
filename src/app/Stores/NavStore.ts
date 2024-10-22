import {NavigationService} from '@app/Services/NavigationService';
import {useColorStore} from '@app/Stores/ColorStore';
import type {IFooter, NavbarLink} from '@app/Interfaces/Navigation';

type NavStoreState = {
	navbar: NavbarLink[] | null;
	footer: IFooter | null;
};

export const useNavStore = defineStore('nav', () => {
	const service = new NavigationService();
	const colorStore = useColorStore();
	const globalColor = computed(() => colorStore.currentGlobalColor);
	const state = reactive<NavStoreState>({
		navbar: null,
		footer: null
	});

	const getNavigation = async () => {
		await service.getNavbar().then(({data}) => {
			state.navbar = data.value;
		});
	};

	const getFooter = async () => {
		await service.getFooter().then(({data}) => {
			state.footer = data.value;
		});
	};

	return {getNavigation, getFooter, state, globalColor};
});
