<script lang="ts" setup>
import type {ITextBlock} from '@app/Interfaces/Page';

const className = 'text-block';
defineProps<{component: ITextBlock}>();
</script>
<template>
	<div :class="className">
		<h1 v-if="component?.title" class="page-title">
			{{ component.title }}
		</h1>
		<h2 :class="`${className}__title`">{{ component.settings.title }}</h2>
		<div :class="`${className}__description`">
			<div v-for="(item, index) in component.settings.description" :key="index" :class="{mark: item.mark}" v-html="item.text" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
