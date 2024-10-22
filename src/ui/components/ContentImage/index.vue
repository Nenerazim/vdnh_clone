<script lang="ts" setup>
import {Button} from '@ui/widgets';
import type {IContentComponent} from '@app/Interfaces/Content';
import {useColorStore} from '@app/Stores/ColorStore';

const className = 'slider-block';

defineProps<{component: IContentComponent}>();

const colorStore = useColorStore();
</script>

<template>
	<div :class="className" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1 v-if="component.page_title" class="page-title">
			{{ component.page_title }}
		</h1>
		<h2 :class="`${className}__title`">{{ component.title }}</h2>
		<div :class="`${className}__description`">
			<div v-html="component.description" />
		</div>
		<Button
			v-if="component.btn"
			size="sm"
			color="primary"
			type="link"
			target="_blank"
			:custom-class="`${className}__btn`"
			:label="component.btn?.title ?? ''"
			:href="component.btn?.href"
		/>
		<img :src="component.items[0].img_url" :alt="component.items[0].img_alt" />
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
