<script setup lang="ts">
import {Button, Slider} from '@ui/widgets';
import type {ICollectionComponent} from '@app/Interfaces/Page';

defineProps<{component: ICollectionComponent}>();
const showAll = ref(false);
const mobile = ref(false);

onMounted(() => {
	checkScreen();
	window.addEventListener('resize', checkScreen);
});
onUnmounted(() => {
	window.removeEventListener('resize', checkScreen);
});
function checkScreen() {
	window.innerWidth <= 600 ? (mobile.value = true) : (mobile.value = false);
}
</script>
<template>
	<div class="content-block" :style="{'--neutral_red': component.color}">
		<h1 class="title">{{ component?.title }}</h1>
		<div class="section-description">
			{{ component.description }}
		</div>
		<div v-if="!mobile" class="collections-grid">
			<div
				v-for="(event, index) in component.settings.items"
				v-show="showAll || index < 6"
				:key="event.id"
				class="collection-item"
				:class="{big: index % 3 === 1}"
			>
				<div class="img-wrapper">
					<img :src="event.img_url" :alt="event.title" />
				</div>
				<h2 class="item-title">{{ event.title }}</h2>
				<div class="item-content">
					<span class="events">{{ event.events || 0 }} событие</span>
					•
					<span class="places">{{ event.places || 0 }} мест</span>
				</div>
			</div>
		</div>
		<div v-if="!mobile && component.settings.items.length > 6 && !showAll">
			<Button label="Показать еще" color="none" icon="showme" custom-class="show-more-btn" @click="showAll = !showAll" />
		</div>
		<div v-if="mobile" class="slider-wrapper">
			<Slider :slides-data="component.settings.items" :slides-per-view="2.7" :space-between="12">
				<template #slide="{title, events, places, img_url}">
					<div class="slide">
						<img :src="img_url" :alt="title" class="slide__img" />
						<div class="slide__info">
							<h2 class="slide-title">{{ title }}</h2>
							<div class="slide-content">
								<span class="slide-events">{{ events }} событие</span>
								•
								<span class="slide-places">{{ places }} мест</span>
							</div>
						</div>
					</div>
				</template>
			</Slider>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
