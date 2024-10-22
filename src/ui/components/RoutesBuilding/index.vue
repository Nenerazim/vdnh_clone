<script lang="ts" setup>
import {ref} from 'vue';
import {Input, Icon, Slider, Button} from '@ui/widgets';
import type {IRoutesBuilding} from '@app/Interfaces/Routes';
import {useColorStore} from '@app/Stores/ColorStore';

defineProps<{component: IRoutesBuilding}>();
const colorStore = useColorStore();

const className = 'routesBuilding';
const showAll = ref(false);
const search = ref('');
// для теста
const gismap = {
	time: 8,
	how_long: '2,1',
	test: ['начало пути', '4 минуты, 246 метров', '1 минута, 84 метра', '4 минуты, 216 метров', '5 минут, 318 метров']
};
</script>

<template>
	<div :class="`${className}`" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1 :class="`${className}-title`">
			{{ component.title }}
		</h1>
		<div :class="`${className}-search`">
			<div :class="`${className}-blockInfo`">
				<div :class="`${className}-info`">Время {{ gismap.time }}ч</div>
				<div :class="`${className}-info`">Рассотяние {{ gismap.how_long }}</div>
				<div :class="`${className}-info`">Точек {{ component.items.length }}</div>
			</div>
			<div :class="`${className}-input`">
				<Icon :class="`${className}__icon`" :height="32" :width="34" name="search" />
				<Input v-model="search" :class="`${className}__input`" :height="32" :width="33" custom-class="ui-input-none" placeholder="поиск по местам" />
			</div>
			<div :class="`${className}-startRoute`">
				<div
					v-for="(brick, index) in component.place"
					v-show="index < 5 || showAll"
					:key="index"
					class="brick"
					:class="{active: component.items.includes(component.place[index])}"
					@click="
						component.items.includes(component.place[index])
							? component.items.splice(component.items.indexOf(component.place[index]), 1)
							: component.items.unshift(component.place[index])
					"
				>
					<Icon :name="brick.icon" class="icon" :width="20" :height="20" />
					<div class="name">
						{{ brick.name }}
					</div>
				</div>
				<Button v-show="!showAll" label="Показать еще" color="none" icon="showme" custom-class="show-more-btn" @click="showAll = !showAll" />
			</div>
		</div>
		<div :class="`${className}-slider`">
			<Slider :slides-per-view="'auto'" :slides-data="component.items" :space-between="12" index>
				<template #slide="{img_url, type, name, index}">
					<div class="slider-container">
						<img :src="img_url" :alt="name" />
						<div class="type">{{ type }}</div>
						<div class="name">{{ name }}</div>
						<div class="time">{{ gismap.test[index] }}</div>
					</div>
				</template>
			</Slider>
		</div>
		<!--		<div :class="`${className}-map`">-->
		<!--			<Map />-->
		<!--		</div>-->
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
