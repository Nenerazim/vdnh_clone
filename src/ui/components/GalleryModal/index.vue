<script lang="ts" setup>
import {Slider} from '@ui/widgets';
import type {IGallery} from '@app/Interfaces/Gallery';
import {ScrollToComponent} from '@app/Helpers/ScrollToComponent';

defineProps<{component: IGallery}>();
</script>

<template>
	<div class="modal">
		<Slider :initial-slide="ScrollToComponent.currentBrick.value" :navigator="1" :slides-data="component.items" :space-between="24">
			<template #slide="{img_url, title, href}">
				<div class="slider">
					<h1>
						{{ title }}
					</h1>
					<iframe v-if="href !== null" :src="href" />
					<img v-if="href === null" :src="img_url || ''" :alt="title" />
				</div>
			</template>
		</Slider>
	</div>
</template>
<style lang="scss" scoped>
@import 'style.scss';
</style>
