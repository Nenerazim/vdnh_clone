<script lang="ts" setup>
import type {IEventTimeManager} from '@app/Interfaces/Event';
import {useColorStore} from '@app/Stores/ColorStore';

defineProps<{component: IEventTimeManager}>();

const colorStore = useColorStore();
</script>

<template>
	<div class="main" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1>{{ component.title }}</h1>
		<span v-if="component.description" v-html="component.description" />
		<div class="info">
			<div v-for="(brick, index) in component.items" :key="index" class="text">
				<div class="day">{{ brick.day }}</div>
				<div class="time">{{ brick.time }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
