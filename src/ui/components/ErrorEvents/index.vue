<script setup lang="ts">
import {Button, Slider} from '@ui/widgets';
import type {IErrorComponent} from '@app/Interfaces/ErrorComponent';

defineProps<{component: IErrorComponent}>();

const showAll = ref(false);
const mobile = ref(false);
const className = 'eventError';

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
	<div :class="className">
		<h1>{{ component.title }}</h1>
		<div v-if="!mobile" :class="`${className}-eventBox`">
			<div
				v-for="(brick, index) in component.items"
				v-show="showAll || index < 8"
				class="brick"
				:class="brick.advertising ? 'advertising' : 'default'"
			>
				<a :href="brick.href">
					<img :src="brick.img_url || '/_nuxt/public/images/Exhibitions/1.jpg'" :alt="brick.title" />
					<div class="brickInfo">
						<span class="brickType">{{ brick.type }}</span>
						<span class="brickTitle">{{ brick.title }}</span>
						<span class="brickTime">{{ brick.time }}</span>
					</div>
					<div v-if="brick.advertising" class="brickAdvertising">Рекламма</div>
				</a>
			</div>
		</div>
		<div v-if="mobile" class="slider-wrapper">
			<Slider :slides-data="component.items" :slides-per-view="'auto'">
				<template #slide="{title, type, time, img_url, href, advertising}">
					<a :href="href">
						<div class="slide">
							<img :src="img_url || '/_nuxt/public/images/Exhibitions/1.jpg'" :alt="title" class="slide__img" />
							<div class="sliderInfo">
								<span class="sliderType">{{ type }}</span>
								<span class="sliderTitle">{{ title }}</span>
								<span class="sliderTime">{{ time }}</span>
							</div>
							<div v-if="advertising" class="brickAdvertising"></div>
						</div>
					</a>
				</template>
			</Slider>
		</div>
		<div v-if="!mobile && component.items.length > 8 && !showAll">
			<Button label="Показать еще" color="none" icon="showme" custom-class="show-more-btn" @click="showAll = !showAll" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
