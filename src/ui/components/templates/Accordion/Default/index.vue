<script lang="ts" setup>
import type {IAccordion} from '@app/Interfaces/Page';

const showText = ref<number | null>();
const toggleItem = (index: number) => {
	const isNumber = Number(index);
	showText.value = showText.value === isNumber ? null : isNumber;
};
defineProps<{component: IAccordion}>();
</script>
<template>
	<div class="accordion">
		<h1>{{ component.title }}</h1>
		<span>{{ component.description }}</span>
		<div class="box-ticket">
			<div v-for="(ticket, index) in component.settings.items" :key="index" :class="{active: showText === Number(index)}" class="ticket">
				<div class="info" @click="toggleItem(index)">
					<div class="ticket-title">{{ ticket.title }}</div>
					<div class="ticket-price">{{ ticket.value }}</div>
					<div :class="{rotate: showText === Number(index)}" class="mark"></div>
				</div>
				<div :class="{show: showText === Number(index)}" class="ticket-info">{{ ticket.description }}</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
