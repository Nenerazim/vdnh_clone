<script setup lang="ts">
import {Slider} from '@ui/widgets';
import SlideUi from '@ui/components/slots/Slide/Fivefold/index.vue';

import type {IPopularComponent} from '@app/Interfaces/Page';

defineProps<{component: IPopularComponent}>();
</script>
<template>
	<div class="popular" :style="{'--neutral_red': component.color}">
		<h1 class="title">{{ component?.title }}</h1>
		<Slider :slides-data="component.settings.items" :slides-per-view="'auto'" :space-between="16" :navigator="component.id">
			<template #slide="{title, img_url, href, btn_label}">
				<SlideUi :title="title" :img-url="img_url" :href="href" :text-button="btn_label" />
			</template>
		</Slider>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
