<script lang="ts" setup>
import {useRoute} from 'vue-router';
import {Icon} from '@ui/widgets';
import type {UiIconProps} from '@ui/widgets/Icon/types';

const activeCategory = ref<number | null>(null);
const mock: {href: string; title: string; icon: UiIconProps['name']}[] = [
	{
		href: '/',
		icon: 'home',
		title: !useRoute().params.slug ? 'Главная' : 'Назад'
	},
	{
		href: '',
		icon: 'ticketMobile',
		title: 'Билет'
	},
	{
		href: '',
		icon: 'popular',
		title: 'Афиша'
	},
	{
		href: '',
		icon: 'categories',
		title: 'Категории'
	},
	{
		href: '',
		icon: 'buy',
		title: 'Корзина'
	}
];
</script>

<template>
	<div class="mobileMenu">
		<div v-for="(brick, index) in mock" :key="index" class="brick" :class="{active: index === activeCategory}" @click="activeCategory = index">
			<a @click="!index && navigateTo(brick.href)">
				<Icon :name="brick.icon" :height="24" :width="24" />
				<span>{{ brick.title }}</span>
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
