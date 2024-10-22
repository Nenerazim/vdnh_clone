<script setup lang="ts">
import type {RoutePointCardProps} from './types';
defineProps<RoutePointCardProps>();
const className = 'point-card';
</script>

<template>
	<div :class="className">
		<div :class="`${className}__poster`">
			<img :class="`${className}__poster__img`" :src="cardData.imageUrl" alt="picture" />
		</div>
		<span :class="`${className}__note`"> {{ cardData.type }} </span>
		<h4 :class="`${className}__title`">{{ cardData.title }}</h4>
		<span :class="`${className}__time`"> {{ cardData.time }} </span>
	</div>
</template>
<style scoped lang="scss">
@import './style';
</style>
