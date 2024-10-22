<script setup lang="ts">
import type {UiPrimarySlideTemplate} from './types';
import {Button} from '@ui/widgets';

defineProps<UiPrimarySlideTemplate>();
</script>
<template>
	<div class="slidePopular">
		<img :src="imgUrl" :alt="title" class="img" />
		<div class="title">{{ title }}</div>
		<Button label="Купить билет" :color="color" full :href="href" />
	</div>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
