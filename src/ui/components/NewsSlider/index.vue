<script lang="ts" setup>
import {Slider} from '@ui/widgets';
import type {INewsSlider} from '@app/Interfaces/News';
import {useColorStore} from '@app/Stores/ColorStore';

defineProps<{component: INewsSlider}>();

const colorStore = useColorStore();
</script>

<template>
	<div class="component-slider" :class="{'for-one-slide': component.items.length <= 3}" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<Slider
			:navigator="component.items.length === 1 ? false : 1"
			:slides-data="component.items"
			:slides-per-view="component.items.length <= 3 ? 1 : 1.3"
			:space-between="32"
			centered-slides
			:style="{'--neutral_red': colorStore.currentGlobalColor}"
		>
			<template #slide="{img_url, img_alt}">
				<div class="slider-container">
					<img :src="img_url" :alt="img_alt" class="image" />
				</div>
			</template>
		</Slider>
	</div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
