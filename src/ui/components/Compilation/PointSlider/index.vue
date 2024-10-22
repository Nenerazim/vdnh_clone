<script setup lang="ts">
import PointCard from '../PointCard/index.vue';
import {Slider} from '@ui/widgets';

const className = 'point-slider';
const routePointsData = [
	{
		id: 1,
		imageUrl: '/images/Collection/1.png',
		title: 'Постоянная экспозиция Музеягородского хозяйства Москвылллл',
		type: 'Экскурсия',
		time: '12 января в 14:00'
	},
	{
		id: 2,
		imageUrl: '/images/Collection/2.png',
		title: 'Постоянная экспозиция Музеягородского хозяйства Москвылллл',
		type: 'Экскурсия',
		time: '12 января в 14:00'
	},
	{
		id: 3,
		imageUrl: '/images/Collection/3.png',
		title: 'Постоянная экспозиция Музеягородского хозяйства Москвылллл',
		type: 'Экскурсия',
		time: '12 января в 14:00'
	},
	{
		id: 4,
		imageUrl: '/images/Collection/4.png',
		title: 'Постоянная экспозиция Музеягородского хозяйства Москвылллл',
		type: 'Экскурсия',
		time: '12 января в 14:00'
	},
	{
		id: 5,
		imageUrl: '/images/Collection/5.png',
		title: 'Постоянная экспозиция Музеягородского хозяйства Москвылллл',
		type: 'Экскурсия',
		time: '12 января в 14:00'
	},
	{
		id: 6,
		imageUrl: '/images/Collection/6.png',
		title: 'Постоянная экспозиция Музеягородского хозяйства Москвылллл',
		type: 'Экскурсия',
		time: '12 января в 14:00'
	},
	{
		id: 7,
		imageUrl: '/images/Collection/2.png',
		title: 'Постоянная экспозиция Музеягородского хозяйства Москвылллл',
		type: 'Экскурсия',
		time: '12 января в 14:00'
	}
];
</script>

<template>
	<div :class="className">
		<Slider :slides-data="routePointsData" slides-per-view="auto" :space-between="12" :class="`${className}__list`">
			<template #slide="item">
				<PointCard :card-data="item" />
			</template>
		</Slider>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
