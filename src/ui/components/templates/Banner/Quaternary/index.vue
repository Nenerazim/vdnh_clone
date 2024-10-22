<script lang="ts" setup>
import {Slider} from '@ui/widgets';
import TertiarySlide from '@ui/components/slots/Slide/Tertiary/index.vue';

import type {IBannerComponent} from '@app/Interfaces/Page';

defineProps<{component: IBannerComponent}>();
</script>
<template>
	<div class="banner">
		<Slider
			:navigator="component.id"
			:slides-data="component.settings.items"
			:slides-per-view="1.3"
			:space-between="30"
			centered-slides
			loop
			navigation
			:style="{'--neutral_red': component.color}"
		>
			<template #slide="{title, description, img_url, href}">
				<TertiarySlide :description="description" :img-url="img_url" :href="href" :title="title" :color="component.color" />
			</template>
		</Slider>
	</div>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
