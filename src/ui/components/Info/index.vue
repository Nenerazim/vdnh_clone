<script lang="ts" setup>
import type {INewsInfo} from '@app/Interfaces/News';
import {useColorStore} from '@app/Stores/ColorStore';

defineProps<{component: INewsInfo}>();

const colorStore = useColorStore();
</script>

<template>
	<div class="main" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1>{{ component.title }}</h1>
		<div class="block-info">
			<div class="info">
				<div class="text" v-html="component.description" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
