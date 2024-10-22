<script setup lang="ts">
import {load} from '@2gis/mapgl';

const markersList = [
	[55.27414804174869, 25.257576991034284],
	[55.289254243403306, 25.211614202468652],
	[55.34418588368302, 25.215341562259866],
	[55.35036569359612, 25.26068195798851],
	[55.32976632814914, 25.238324424362062]
];

onMounted(async () => {
	const useMap = await load();

	const map = new useMap.Map('mapContainer', {
		key: 'd39afc4a-0c4f-4ccd-9bb8-c25978005eff',
		center: [55.31878, 25.23584],
		zoom: 16
	});

	markersList.forEach(
		(coords) =>
			new useMap.Marker(map, {
				coordinates: coords
			})
	);
});
</script>

<template>
	<div id="mapContainer" class="mapContainer"></div>
</template>

<style lang="scss" scoped>
.mapContainer {
	width: 100%;
	height: 100%;
}
</style>
