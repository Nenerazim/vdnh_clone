<script lang="ts" setup>
import type {IEventsComponent} from '@app/Interfaces/Page';
const className = 'events-default';
defineProps<{component: IEventsComponent}>();
</script>
<template>
	<div :class="className" :style="{'--neutral_red': component.color}">
		<div class="grid">
			<div v-for="brick in component.settings" :key="brick.id" class="brick" :class="{ad: brick.type === 2, cart: brick.type === 1}">
				<img :src="brick.img_url" :alt="brick.href" class="image" />
				<a class="data-box" :href="brick.href">
					<div class="event-box">{{ brick.event }}</div>
					<div class="title-box">{{ brick.title }}</div>
					<div class="time-box">{{ brick.time }}</div>
				</a>
				<div v-if="brick.type === 2" class="ad-box">Реклама</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
