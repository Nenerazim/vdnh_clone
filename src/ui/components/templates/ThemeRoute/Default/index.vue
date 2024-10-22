<script lang="ts" setup>
import {Slider} from '@ui/widgets';
import type {IThemeRoutesComponent} from '@app/Interfaces/Page';

defineProps<{component: IThemeRoutesComponent}>();
</script>

<template>
	<div class="theme-routes">
		<h1 class="title">{{ component?.title }}</h1>
		<div class="info">
			{{ component?.description }}
		</div>
		<Slider
			:slides-data="component.settings.items"
			:slides-per-view="4"
			:space-between="24"
			:navigator="component.id"
			:style="{'--neutral_red': component.color}"
		>
			<template #slide="{title, img_url, time}">
				<div class="sliders">
					<h2 class="title-slider">{{ title }}</h2>
					<div class="vector-img">
						<img :src="img_url" alt="title" class="image" />
					</div>
					<div class="time">{{ time }}</div>
				</div>
				<!--        for mobile version -->
				<div class="sliders mobile">
					<div class="vector-img">
						<img :src="img_url" alt="title" class="image" />
					</div>
					<div class="info-text">
						<h2 class="title-slider">{{ title }}</h2>
						<div class="time">{{ time }}</div>
					</div>
				</div>
			</template>
		</Slider>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
:deep(.swiper-wrapper) {
	align-items: stretch;
}
:deep(.swiper-slide) {
	width: auto;
	height: auto;
}
</style>
