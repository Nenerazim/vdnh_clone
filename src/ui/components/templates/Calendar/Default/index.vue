<script lang="ts" setup>
import {mockCategories} from './mock';
import {Slider} from '@ui/widgets';
import {CreateSelectedDay} from '@app/Helpers/CreateSelectedDay';
import {Calendar} from '@app/Helpers/CreateCalendar';
import {CreateSelectedFilter} from '@app/Helpers/CreateSelectedFilter';
import type {ICalendarComponent} from '@app/Interfaces/Page';

defineProps<{
	component: ICalendarComponent;
}>();

const calendar = [...Calendar.generateCalendarArray(), ...Calendar.generateCalendarArray(true)];

const {selectedDates} = CreateSelectedDay;
const {visibleData} = CreateSelectedDay;

const {activeCategories} = CreateSelectedFilter;
const {visibleFilter} = CreateSelectedFilter;
</script>

<template>
	<div class="ui-calendar">
		<div class="box">
			<h1 class="title">
				<span class="static">
					{{ visibleFilter }}
					<span :style="{'--neutral_red': component.color}" class="dynamic">{{ visibleData }}</span>
				</span>
			</h1>
			<div class="slider-container">
				<Slider
					:navigator="100"
					:slides-data="calendar"
					:slides-per-view="'auto'"
					:space-between="18"
					:style="{'--neutral_red': component.color}"
					breakpoints="none"
				>
					<template #slide="{month, dayOfWeek, dayOfMonth, date}">
						<div class="slide">
							<div class="month">{{ month }}</div>
							<div
								:class="{active: selectedDates.includes(date), betweenDates: CreateSelectedDay.betweenDate(date)}"
								class="dates"
								@click="CreateSelectedDay.handleDateClick(date)"
							>
								<p>{{ dayOfWeek }}</p>
								<span>{{ dayOfMonth }}</span>
							</div>
						</div>
					</template>
				</Slider>
			</div>
		</div>
		<div class="categories-list">
			<div
				v-for="category in mockCategories"
				:key="category.id"
				:class="{active: activeCategories.includes(category.name)}"
				:style="{'--neutral_red': component.color}"
				class="category"
				@click="CreateSelectedFilter.handleFilterClick(category.name)"
			>
				<img :alt="category.name" :src="category.img" />
				{{ category.name }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
