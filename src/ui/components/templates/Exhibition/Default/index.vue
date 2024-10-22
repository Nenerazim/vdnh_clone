<script lang="ts" setup>
import type {IExhibitionComponent} from '@app/Interfaces/Page';
import {Button, Slider} from '@ui/widgets';

const className = 'exhibition';

defineProps<{component: IExhibitionComponent}>();
</script>

<template>
	<div :class="`${className}`">
		<Slider
			:slides-data="component.settings.items"
			:slides-per-view="1"
			:space-between="27"
			:navigator="component.id"
			:style="{'--neutral_red': component.color}"
		>
			<template #slide="{title, img_url, href}">
				<div class="sliders">
					<div class="title">{{ title }}</div>
					<Button :href="href" class="button" color="primary" label="Подробнее" type="link" />
					<img :src="img_url" :alt="title" class="background-image" />
				</div>
			</template>
		</Slider>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
