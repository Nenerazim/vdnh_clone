<script lang="ts" setup>
import {Button, Slider} from '@ui/widgets';
import type {IRoutesPreview} from '@app/Interfaces/Routes';
import {useColorStore} from '@app/Stores/ColorStore';
defineProps<{component: IRoutesPreview}>();

const colorStore = useColorStore();
const show = ref(false);
</script>
<template>
	<div class="main">
		<div class="slider">
			<Slider :slides-data="component.items" :slides-per-view="1" :navigator="component.id" :style="{'--neutral_red': colorStore.currentGlobalColor}">
				<template #slide="{title, img_url}">
					<div class="image-box">
						<h1 class="image-title">{{ title }}</h1>
						<img :src="img_url" alt="Map" class="image" />
					</div>
				</template>
			</Slider>
		</div>
		<div class="title">{{ component.title }}</div>
		<div class="description" :style="{'max-height': show ? '100%' : '44px'}">{{ component.description }}</div>
		<div v-if="!show" class="btn-wall">
			<Button label="Читать далее" icon="arrow-left" color="none" @click="show = !show" />
		</div>
		<Button
			v-if="component?.href"
			:label="component.btn"
			color="primary"
			type="link"
			:href="component?.href"
			:style="{'--neutral_red': colorStore.currentGlobalColor}"
		/>
	</div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
