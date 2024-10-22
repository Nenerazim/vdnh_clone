<script lang="ts" setup>
import {Slider} from '@ui/widgets';
import Slide from '@ui/components/slots/Slide/Quaternary/index.vue';
import type {ISpecialOffersComponent} from '@app/Interfaces/Page';

const className = 'special-offers';

defineProps<{component: ISpecialOffersComponent}>();
</script>

<template>
	<div :class="`${className}`" :style="{'--neutral_red': component.color}">
		<div :class="`${className}__header`">
			<h1 class="title">{{ component?.title }}</h1>
			<div class="description">{{ component?.description }}</div>
		</div>
		<Slider :slides-data="component.settings.items" :slides-per-view="2.7" :space-between="24">
			<template #slide="{href, img_url, title, min_price, btn_label}">
				<Slide :href="href" :img-url="img_url" :min-price="min_price" :title="title" :btn-label="btn_label" />
			</template>
		</Slider>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
