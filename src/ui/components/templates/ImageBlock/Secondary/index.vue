<script lang="ts" setup>
import type {IImageBlock} from '@app/Interfaces/Page';

const className = 'image-block';
defineProps<{component: IImageBlock}>();
</script>
<template>
	<div :class="className">
		<h2 :class="`${className}__title`">{{ component.title }}</h2>
		<div :class="`${className}__content`">
			<div :class="`${className}__content__item`">
				<div :class="`${className}__img-wrapper`">
					<img :src="component.settings.img_url" :alt="component.settings.img_alt" :class="`${className}__img`" />
				</div>
				<span :class="`${className}__note`">
					{{ component.title }}
				</span>
				<span :class="`${className}__name`">
					{{ component.settings.img_alt }}
				</span>
			</div>
			<div v-if="component.settings?.description" :class="`${className}__description`">
				<div v-for="(item, index) in component.settings.description" :key="index" :class="{mark: item.mark}" v-html="item.text" />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
