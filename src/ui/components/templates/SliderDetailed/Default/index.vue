<script lang="ts" setup>
import {Slider} from '@ui/widgets';
import type {ISliderDetailed} from '@app/Interfaces/Page';
defineProps<{component: ISliderDetailed}>();
const activeCategory = ref();
</script>
<template>
	<div class="main">
		<div class="sliders">
			<Slider :navigator="component.id" :slides-data="component.settings.items" :style="{'--neutral_red': component.color}" :space-between="24">
				<template #slide="{img_url, title, description}">
					<div class="slider">
						<div class="slider-title">{{ title }}</div>
						<div class="slider-text">{{ description }}</div>
						<div class="categories-list view-mobile">
							<div
								v-for="category in component.settings.categories"
								:key="category.id"
								class="category"
								:class="{active: category.id === activeCategory}"
								:style="{'--neutral_red': component.color}"
								@click="activeCategory = category.id"
							>
								<img class="category-img" :src="category.img_url" :alt="category.label" />
								{{ category.label }}
							</div>
						</div>
						<img :alt="title" class="slider-background-image" :src="img_url" />
					</div>
				</template>
			</Slider>
		</div>
		<div class="categories-list hide-mobile">
			<div
				v-for="category in component.settings.categories"
				:key="category.id"
				class="category"
				:class="{active: category.id === activeCategory}"
				:style="{'--neutral_red': component.color}"
				@click="activeCategory = category.id"
			>
				<img class="category-img" :src="category.img_url" :alt="category.label" />
				{{ category.label }}
			</div>
		</div>
		<div class="info">
			<h1>{{ component.settings.title }}</h1>
			<div class="text" v-html="component.settings.description"></div>
		</div>
		<div class="image-box">
			<img class="image" :src="component.settings.img_url" :alt="component.settings.title" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import 'style';

:deep(.swiper-wrapper) {
	align-items: stretch;
}
:deep(.swiper-slide) {
	width: auto;
	height: auto;
}
</style>
