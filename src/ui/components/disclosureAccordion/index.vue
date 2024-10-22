<script lang="ts" setup>
import {UiAccordion} from '@ui/widgets';
import {useColorStore} from '@app/Stores/ColorStore';
import type {IDisclosureComponents} from '@app/Interfaces/Disclosure';

const className = 'disclosureAccordion';

defineProps<{component: IDisclosureComponents; pageTitle: string}>();

const colorStore = useColorStore();

const openedAcc = ref<Set<number>>(new Set([]));
function showAccordion(index: number) {
	openedAcc.value.has(index) ? openedAcc.value.delete(index) : openedAcc.value.add(index);
}
</script>
<template>
	<div :class="`${className}`" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1>{{ pageTitle }}</h1>
		<UiAccordion
			v-for="(brick, index) in component.items"
			:key="index"
			:is-open="openedAcc.has(index)"
			:class="{info__acc_open: openedAcc.has(index)}"
			class="info__acc"
			position-icon-left
			:animation="false"
		>
			<template #title>
				<div :class="`${className}-brickTitle`" @click="showAccordion(index)">
					{{ brick.block_title }}
				</div>
			</template>
			<template #default>
				<div v-for="values in brick.values" :class="`${className}-value`">
					<div :class="`${className}-circle`"><div /></div>
					<a :href="values.file">
						{{ values.file_title }}
					</a>
				</div>
			</template>
			<template #icon>
				<div class="point" :class="{rotate: openedAcc.has(index)}" />
			</template>
		</UiAccordion>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
