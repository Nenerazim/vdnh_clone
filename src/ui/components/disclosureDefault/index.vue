<script lang="ts" setup>
import {useColorStore} from '@app/Stores/ColorStore';
import type {IDisclosureComponents} from '@app/Interfaces/Disclosure';

const className = 'disclosureDefault';

defineProps<{component: IDisclosureComponents; pageTitle: string}>();

const colorStore = useColorStore();
</script>
<template>
	<div :class="`${className}`" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1>{{ pageTitle }}</h1>
		<div v-for="(brick, index) in component.items" :key="index" :class="`${className}-brick`">
			<div :class="`${className}-brickTitle`">
				{{ brick.block_title }}
			</div>
			<div v-for="values in brick.values" :class="`${className}-value`">
				<div :class="`${className}-circle`"><div /></div>
				<a :href="values.file">
					{{ values.file_title }}
				</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
