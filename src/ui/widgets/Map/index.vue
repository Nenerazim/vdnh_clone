<script setup lang="ts">
import Map from './Map.vue';
</script>

<template>
	<div class="map-widget">
		<ClientOnly>
			<Map />
		</ClientOnly>
	</div>
</template>

<style lang="scss" scoped>
.map-widget {
	width: 100%;
	aspect-ratio: 5/2;
	border-radius: 1rem;
	overflow: hidden;
}
</style>
