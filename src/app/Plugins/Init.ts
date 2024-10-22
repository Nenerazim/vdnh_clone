import {useNavStore} from '@app/Stores/NavStore';

export default defineNuxtPlugin(async () => {
	const store = useNavStore();
	await Promise.all([store.getNavigation(), store.getFooter()]);
});
