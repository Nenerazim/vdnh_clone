<script setup lang="ts">
import type {UiSecondarySlideTemplate} from './types';
import {Button} from '@ui/widgets';

defineProps<UiSecondarySlideTemplate>();
</script>
<template>
	<div class="slidePopular">
		<img :src="imgUrl" :alt="title" class="img" />
		<div class="title">{{ title }}</div>
		<div v-if="typeof price === 'number'" class="action-button">
			<Button label="Купить билет" class="popular-btn" full />
			<Button :label="`от ${price} ₽`" class="popular-btn" color="none" full />
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
