<script lang="ts" setup>
import type {ISliderBlock} from '@app/Interfaces/Page';
import {Slider} from '@ui/widgets';

const className = 'slider-block';
defineProps<{component: ISliderBlock}>();
</script>
<template>
	<div :class="className">
		<h1 v-if="component?.title" class="page-title">
			{{ component.title }}
		</h1>
		<h2 :class="`${className}__title`">{{ component.settings.title }}</h2>
		<div v-if="component.settings?.description" :class="`${className}__description`">
			<div v-for="(item, index) in component.settings.description" :key="index" :class="{mark: item.mark}" v-html="item.text" />
		</div>

		<Slider :navigator="component.id" :slides-data="component.settings.items" :slides-per-view="1" :space-between="24">
			<template #slide="{img_url, img_alt}">
				<div :class="`${className}__slide`">
					<img :src="img_url" :alt="img_alt" :class="`${className}__img`" />
				</div>
			</template>
		</Slider>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
