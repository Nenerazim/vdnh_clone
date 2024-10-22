<script lang="ts" setup>
import {ref} from 'vue';
import {Button, Icon} from '@ui/widgets';
import {useColorStore} from '@app/Stores/ColorStore';
import type {IcurrentFilter, IGallery} from '@app/Interfaces/Gallery';
import {ScrollToComponent} from '@app/Helpers/ScrollToComponent';

defineProps<{component: IGallery}>();

const className = 'gallery';
const showAll = ref(false);
const showFilter = ref(0);
const currentFilter = <IcurrentFilter>reactive({
	year: [],
	category: []
});

const colorStore = useColorStore();
</script>
<template>
	<div :class="`${className}`" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1 :class="`${className}-title`">
			{{ component.title }}
		</h1>
		<div :class="`${className}-filter`">
			<div :class="`${className}-category`">
				<div class="boxShowBtn" @click="showFilter === 1 ? (showFilter = 0) : (showFilter = 1)">
					<span>Катерогия</span>
					<Icon name="showme" :height="20" :width="20" />
				</div>
				<div class="tag" :class="showFilter === 1 ? 'active' : 'none'">
					<div
						v-for="category in component.category"
						@click="
							showFilter = 0;
							currentFilter.category.includes(category)
								? currentFilter.category.splice(currentFilter.category.indexOf(category), 1)
								: currentFilter.category.push(category);
						"
					>
						{{ category }}
					</div>
				</div>
			</div>
			<div :class="`${className}-year`">
				<div class="boxShowBtn" @click="showFilter === 2 ? (showFilter = 0) : (showFilter = 2)">
					<span>Год</span>
					<Icon name="showme" :height="20" :width="20" />
				</div>
				<div class="tag" :class="showFilter === 2 ? 'active' : 'none'">
					<div
						v-for="year in component.year"
						@click="
							showFilter = 0;
							currentFilter.year.includes(year) ? currentFilter.year.splice(currentFilter.year.indexOf(year), 1) : currentFilter.year.push(year);
						"
					>
						{{ year }}
					</div>
				</div>
			</div>
		</div>
		<div :class="`${className}-container`">
			<div
				v-for="(brick, index) in component.items"
				v-show="showAll || index < 12"
				:class="`${className}-brick`"
				@click="ScrollToComponent.currentBrick.value = index"
			>
				<img :src="brick.img_url || '../../../public/images/Banner/1.png'" :alt="brick.title" />
				<div :class="`${className}-brickType`">
					{{ brick.type }}
				</div>
				<div :class="`${className}-brickTitle`">
					{{ brick.title }}
				</div>
				<div :class="`${className}-brickDay`">
					{{ brick.day }}
				</div>
			</div>
		</div>
		<div>
			<div v-if="component.items.length > 12 && !showAll">
				<Button label="Показать еще" color="none" icon="showme" custom-class="show-more-btn" @click="showAll = !showAll" />
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>
