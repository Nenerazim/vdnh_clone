<script lang="ts" setup>
import type {ITertiarySlideTemplate} from './types';
import {Button} from '@ui/widgets';

defineProps<ITertiarySlideTemplate>();
</script>

<template>
	<div class="banner-slide">
		<div>
			<img :alt="title" :src="imgUrl" class="image" />
		</div>
		<div class="information" :style="{'--neutral_red': color}">
			<div class="title">{{ title }}</div>
			<a class="description" :href="href">{{ description }}</a>
			<Button v-if="btnLabel" :href="href" class="button" :label="btnLabel" type="link" :style="{'--neutral_red': color}" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
