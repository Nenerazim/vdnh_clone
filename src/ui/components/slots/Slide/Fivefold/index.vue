<script lang="ts" setup>
import type {ISlidePrimary} from './type';
import {Button} from '@ui/widgets';

const className = 'slide';
defineProps<ISlidePrimary>();
</script>

<template>
	<div :class="className">
		<div :class="`${className}__title`">{{ title }}</div>
		<div v-if="href" :class="`${className}__actions`">
			<Button v-if="href" :href="href" :label="textButton ? textButton : 'Купить билет'" class="button" color="primary" full type="link" />
		</div>

		<img :alt="title" :class="`${className}__background-image`" :src="imgUrl" />
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
