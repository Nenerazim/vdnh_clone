<script lang="ts" setup>
import type {IEventAccordion} from '@app/Interfaces/Event';
import {useColorStore} from '@app/Stores/ColorStore';

const showText = ref<number | null>();
const toggleItem = (index: number) => {
	const isNumber = Number(index);
	showText.value = showText.value === isNumber ? null : isNumber;
};
defineProps<{component: IEventAccordion}>();

const colorStore = useColorStore();
</script>

<template>
	<div class="accordion" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1>Билеты</h1>
		<span v-if="component.description" v-html="component.description" />
		<div class="box-ticket">
			<div v-for="(ticket, index) in component.items" :key="index" :class="{active: showText === Number(index)}" class="ticket">
				<div class="info" @click="toggleItem(index)">
					<div class="ticket-title">{{ ticket.title }}</div>
					<div class="ticket-price">{{ ticket.value }}</div>
					<div :class="{rotate: showText === Number(index)}" class="mark"></div>
				</div>
				<div :class="{show: showText === Number(index)}" class="ticket-info" v-html="ticket.description" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
