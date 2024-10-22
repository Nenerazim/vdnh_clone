<script setup lang="ts">
import {Button, Slider} from '@ui/widgets';
import DefaultSlide from '@ui/components/slots/Slide/Default/index.vue';
import type {IBannerComponent} from '@app/Interfaces/Page';

defineProps<{component: IBannerComponent}>();
</script>
<template>
	<div class="banner">
		<Slider
			:navigator="component.id"
			:slides-data="component.settings.items"
			:slides-per-view="1"
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
		<div v-if="component.settings?.item" class="mini-info">
			<div class="mini-info__content">
				<h2 class="banner-title">{{ component.settings.item.title }}</h2>
				<Button
					:label="component.settings.item.btn_label"
					full
					:href="component.settings.item.href"
					type="link"
					:style="{'--neutral_red': component.color}"
				/>
			</div>
			<img :src="component.settings.item.img_url" alt="" class="banner-img" />
		</div>
	</div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>
