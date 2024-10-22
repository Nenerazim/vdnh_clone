<script setup lang="ts">
import type {IThemeRoutesComponent} from '@app/Interfaces/Page';
import {Button} from '@ui/widgets';

defineProps<{component: IThemeRoutesComponent}>();
const showAll = ref(false);
</script>
<template>
	<div class="theme-routes" :style="{'--neutral_red': component.color}">
		<h1 class="title">{{ component?.title }}</h1>
		<div class="info">
			{{ component?.description }}
		</div>
		<div class="grid-routes">
			<div v-for="(brick, index) in component.settings.items" v-show="showAll || index < 4" :key="index" class="brick">
				<img :src="brick.img_url" alt="" class="image" />
				<div class="brick-info">
					<h2 class="brick-title">
						{{ brick.title }}
					</h2>
					<div class="time">
						{{ brick.time }}
					</div>
				</div>
			</div>
		</div>
		<Button v-if="!showAll" label="Показать еще" color="none" icon="showme" class="show-me-btn" @click="showAll = !showAll" />
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
