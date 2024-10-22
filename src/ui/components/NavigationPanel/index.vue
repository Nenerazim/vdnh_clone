<script lang="ts" setup>
import {useColorStore} from '@app/Stores/ColorStore';

withDefaults(defineProps<{navigation?: {name: string; index: number}[]}>(), {
	navigation: () => []
});

const colorStore = useColorStore();

function scrollToComponent(ref: number) {
	const element = document.getElementById(ref.toString());
	element?.scrollIntoView({block: 'center', behavior: 'smooth'});
}
</script>
<template>
	<div class="navigationPanel" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<div>
			<div v-for="(nav, index) in navigation" :key="index" class="string">
				<button @click="scrollToComponent(nav.index)">{{ nav.name }}</button>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
