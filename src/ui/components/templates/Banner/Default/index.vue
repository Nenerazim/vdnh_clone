<script lang="ts" setup>
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
			:slides-per-view="'auto'"
			:space-between="10"
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
					:color="component.color"
					:style="{'--neutral_red': component.color}"
				/>
			</template>
		</Slider>
	</div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>
