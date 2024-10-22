<script lang="ts" setup>
import {Slider} from '@ui/widgets';
import type {IEventSlider} from '@app/Interfaces/Event';
import {useColorStore} from '@app/Stores/ColorStore';

defineProps<{component: IEventSlider}>();
const activeCategory = ref<number>();
const colorStore = useColorStore();
</script>
<template>
	<div class="main" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<div class="sliders">
			<Slider :navigator="1" :slides-data="component.items" :space-between="24">
				<template #slide="{img_url, title, description}">
					<div class="slider">
						<div class="slider-title">{{ title }}</div>
						<div class="slider-text">{{ description }}</div>
						<div class="categories-list view-mobile">
							<div
								v-for="category in component.categories"
								:key="category.id"
								class="category"
								:class="{active: category.id === activeCategory}"
								@click="activeCategory = category.id"
							>
								<img class="category-img" :src="category.img_url" :alt="category.title" />
								{{ category.title }}
							</div>
						</div>
						<img :alt="title" class="slider-background-image" :src="img_url" />
					</div>
				</template>
			</Slider>
		</div>
		<div class="categories-list hide-mobile">
			<div
				v-for="category in component.categories"
				:key="category.id"
				class="category"
				:class="{active: category.id === activeCategory}"
				@click="activeCategory = category.id"
			>
				<img class="category-img" :src="category.img_url" :alt="category.title" />
				{{ category.title }}
			</div>
		</div>
		<div class="info">
			<h1>{{ component.title }}</h1>
			<div v-if="component.description" class="text" v-html="component.description"></div>
		</div>
		<div v-if="component.img_url" class="image-box">
			<img class="image" :src="component.img_url" :alt="component.title" />
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
