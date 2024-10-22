<script lang="ts" setup>
import {ref} from 'vue';
import {Button} from '@ui/widgets';

const className = 'tabs';

const tabs = [
	{
		id: 1,
		title: 'События'
	},
	{
		id: 2,
		title: 'Места'
	},
	{
		id: 3,
		title: 'Комбо-программы'
	}
];

const activeTabId = ref<number | null>(tabs[0].id);
</script>

<template>
	<ul :class="className">
		<li v-for="tab in tabs" :key="tab.id" :class="[`${className}__item`, {active: tab.id === activeTabId}]">
			<Button color="transparent" :label="tab.title" :custom-class="`${className}__item__btn`" @on-click="activeTabId = tab.id" />
		</li>
	</ul>
</template>

<style lang="scss" scoped>
@import './style';
</style>
