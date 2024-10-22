export const useColorStore = defineStore('color', () => {
	const currentGlobalColor = ref('230, 60, 70');

	const setColor = (color?: string) => {
		currentGlobalColor.value = color ?? '230, 60, 70';
	};

	return {setColor, currentGlobalColor};
});
