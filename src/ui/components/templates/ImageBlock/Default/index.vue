<script lang="ts" setup>
import type {IImageBlock} from '@app/Interfaces/Page';
import {Button} from '@ui/widgets';

const className = 'image-block';
defineProps<{component: IImageBlock}>();
</script>
<template>
	<div :class="className">
		<h1 v-if="component.title" class="page-title">
			{{ component.title }}
		</h1>
		<h2 :class="`${className}__title`">{{ component.settings.title }}</h2>
		<div v-if="component.settings?.description" :class="`${className}__description`">
			<div v-for="(item, index) in component.settings.description" :key="index" :class="{mark: item.mark}" v-html="item.text" />
		</div>
		<Button
			v-if="component.settings?.link"
			color="primary"
			type="link"
			target="_blank"
			:custom-class="`${className}__btn`"
			:label="component.settings.link?.label"
			:href="component.settings.link?.url"
		/>
		<div :class="`${className}__img-wrapper`">
			<img :src="component.settings.img_url" :alt="component.settings.img_alt" :class="`${className}__img`" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
