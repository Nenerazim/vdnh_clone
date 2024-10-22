<script setup lang="ts">
import {Slider} from '@ui/widgets';
import DefaultSlide from '@ui/components/slots/Slide/Default/index.vue';

import type {IBannerComponent} from '@app/Interfaces/Page';
defineProps<{component: IBannerComponent}>();
</script>
<template>
	<div class="banner">
		<Slider
			:navigator="component.id"
			:slides-data="component.settings.items"
			navigation
			:slides-per-view="1"
			:space-between="24"
			:style="{'--neutral_red': component.color}"
		>
			<template #slide="{img_url, title, description, min_price, time, href, btn_label}">
				<DefaultSlide
					:description="description"
					:href="href"
					:img-url="img_url"
					:min-price="min_price"
					:time="time"
					:title="title"
					:btn-label="btn_label"
					btn-position="flex-start"
					:color="component.color"
				/>
			</template>
		</Slider>
	</div>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
