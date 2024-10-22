<script lang="ts" generic="T" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import type {SwiperOptions} from 'swiper/types';
import {Navigation} from 'swiper/modules';
import type {UiSliderProps} from './types';
import {Button} from '@ui/widgets';
import 'swiper/css';

const className = 'ui-slider';

const props = withDefaults(defineProps<UiSliderProps<T>>(), {
	initialSlide: 0,
	slidesPerView: 1,
	spaceBetween: 0,
	slidesData: () => [],
	navigator: 0,
	crashBox: false,
	loop: true,
	centeredSlides: false
});
const navigation = props.slidesData.length === props.slidesPerView ? 0 : props.navigator;
const breakpoints: SwiperOptions['breakpoints'] = {
	0: {
		slidesPerView: props.slidesPerView === 'auto' ? 'auto' : props.slidesPerView < 2 ? 1 : 1.2,
		spaceBetween: props.spaceBetween,
		centeredSlides: false
	},
	398: {
		slidesPerView: props.slidesPerView === 'auto' ? 'auto' : props.slidesPerView > 3 ? 1.7 : props.slidesPerView < 2.6 ? 1 : 1.2,
		spaceBetween: props.spaceBetween,
		centeredSlides: false
	},
	640: {
		slidesPerView: props.slidesPerView === 'auto' ? 'auto' : props.slidesPerView > 3 ? 2 : props.slidesPerView > 2.6 ? 2.2 : props.slidesPerView,
		spaceBetween: props.spaceBetween,
		centeredSlides: props.centeredSlides
	},
	768: {
		slidesPerView: props.slidesPerView === 'auto' ? 'auto' : props.slidesPerView > 3 ? 3 : props.slidesPerView > 2.6 ? 2.4 : props.slidesPerView,
		spaceBetween: props.spaceBetween,
		centeredSlides: props.centeredSlides
	},
	1024: {
		slidesPerView: props.slidesPerView === 'auto' ? 'auto' : +props.slidesPerView > 3 ? 3 : props.slidesPerView,
		spaceBetween: props.spaceBetween,
		centeredSlides: props.centeredSlides
	},
	1366: {
		slidesPerView: props.slidesPerView,
		spaceBetween: props.spaceBetween,
		centeredSlides: props.centeredSlides
	}
};
</script>

<template>
	<div v-if="slidesData.length" :class="className">
		<Swiper
			:initial-slide="props.initialSlide"
			:breakpoints="breakpoints"
			:centered-slides="props.centeredSlides"
			:loop="props.slidesData.length >= Number(props.slidesPerView) + 2"
			:modules="[Navigation]"
			:navigation="{
				prevEl: `.slider-action-prev${navigator}`,
				nextEl: `.slider-action-next${navigator}`,
				disabledClass: 'slider-action-disabled'
			}"
			:slides-per-view="props.slidesPerView"
			:space-between="props.spaceBetween"
		>
			<SwiperSlide v-for="(slide, index) in slidesData" :key="index">
				<slot name="slide" v-bind="slide" :index="index" />
			</SwiperSlide>
		</Swiper>
		<div v-if="navigation">
			<div :class="['slider-action', 'prev', `slider-action-prev${navigator}`]">
				<Button color="default" custom-class="arrow-btn" icon="arrow" />
			</div>
			<div :class="['slider-action', 'next', `slider-action-next${navigator}`]">
				<Button color="default" custom-class="arrow-btn" icon="arrow" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style.scss';

:deep(.swiper-slide) {
	width: auto;
}
</style>
