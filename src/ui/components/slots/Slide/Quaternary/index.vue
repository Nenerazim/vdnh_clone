<script lang="ts" setup>
import type {ISlideDefault} from './type';
import {Button} from '@ui/widgets';

const className = 'slide';
defineProps<ISlideDefault>();
</script>

<template>
	<div :class="className">
		<div :class="`${className}__content`">
			<div :class="`${className}__title`">{{ title }}</div>
			<div v-if="href || minPrice" :class="`${className}__actions`">
				<Button v-if="btnLabel" :href="href" :label="btnLabel ? btnLabel : 'Купить билет'" class="button" color="default" type="link" />
				<Button v-if="minPrice" class="button" :label="`от ${minPrice}₽`" color="primary" type="link" />
			</div>
		</div>

		<img :alt="title" :class="`${className}__background-image`" :src="imgUrl" />
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
