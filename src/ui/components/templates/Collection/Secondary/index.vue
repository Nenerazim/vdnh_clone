<script setup lang="ts">
import {Button} from '@ui/widgets';
import type {ICollectionComponent} from '@app/Interfaces/Page';

defineProps<{component: ICollectionComponent}>();
const showAll = ref(false);
const mobile = ref(5);

onMounted(() => {
	checkScreen();
	window.addEventListener('resize', checkScreen);
});

onUnmounted(() => {
	window.removeEventListener('resize', checkScreen);
});
function checkScreen() {
	window.innerWidth <= 640 ? (mobile.value = 4) : (mobile.value = 5);
}
</script>
<template>
	<section id="collections">
		<div class="content-block b-r-16">
			<h1 class="title">{{ component?.title }}</h1>
			<div class="section-description">
				{{ component?.description }}
			</div>
			<div class="collections-grid">
				<div
					v-for="(event, index) in component.settings.items"
					v-show="showAll || index < mobile"
					:key="event.id"
					class="collection-item"
					:class="{max: index % 5 === 0, big: index % 5 === 3 || index % 5 === 4}"
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
			<Button
				v-if="!showAll && component.settings.items.length > mobile"
				label="Показать еще"
				color="none"
				icon="showme"
				custom-class="show-more-btn"
				@click="showAll = !showAll"
			/>
		</div>
	</section>
</template>
<style lang="scss" scoped>
@import './style';
</style>
