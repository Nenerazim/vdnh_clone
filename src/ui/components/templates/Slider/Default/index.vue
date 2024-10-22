<script lang="ts" setup>
import {Slider} from '@ui/widgets';
import type {ISlider} from '@app/Interfaces/Page';

defineProps<{component: ISlider}>();
</script>
<template>
	<div class="component-slider">
		<Slider
			:navigator="component.id"
			:slides-data="component.settings.items"
			:slides-per-view="1.3"
			:space-between="32"
			loop
			centered-slides
			:style="{'--neutral_red': component.color}"
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
