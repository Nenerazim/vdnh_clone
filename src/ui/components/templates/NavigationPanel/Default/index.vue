<script lang="ts" setup>
import type {INavigationPanel} from '@app/Interfaces/Page';
import {ScrollToComponent} from '@app/Helpers/ScrollToComponent';

defineProps<{component: INavigationPanel}>();

function scrollToComponent(ref: number) {
	const element = document.getElementById(ref.toString());
	element?.scrollIntoView({block: 'center', behavior: 'smooth'});
}
</script>
<template>
	<div class="navigationPanel" :style="{'--neutral_red': component.color}">
		<div class="title">{{ component.settings.title }}</div>
		<div v-if="component.settings?.items">
			<div v-for="(href, index) in component.settings.items" :key="index" class="string">
				<a :href="href.href">{{ href.title }}</a>
			</div>
		</div>
		<div v-if="component.settings.default_option">
			<div v-for="(nav, index) in ScrollToComponent.navigationItem.value" :key="index" class="string">
				<button @click="scrollToComponent(nav.index)">{{ nav.name }}</button>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
