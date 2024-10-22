<script lang="ts" setup>
import {Button} from '@ui/widgets';
import type {IGridInfo} from '@app/Interfaces/Page';

defineProps<{component: IGridInfo}>();

const show = ref(false);
</script>
<template>
	<div class="components" :style="{'--neutral_red': component.color}">
		<h1>{{ component.title }}</h1>
		<div class="brick-container">
			<div v-for="(brick, index) in component.settings.items" v-show="show || index < 2" :key="index" class="brick">
				<img :src="brick.img_url" :alt="brick.description" class="image" />
				<div class="textBlock">
					<div class="time">{{ brick.time }}</div>
					<div class="title">{{ brick.title }}</div>
					<div class="description">{{ brick.description }}</div>
					<Button label="Читать далее" color="transparent" type="link" :href="brick.href" icon="arrow-left" custom-class="read-more-btn" />
				</div>
			</div>
		</div>
		<Button v-if="!show" label="Показать еще" icon="showme" color="transparent" custom-class="show-more-btn" @click="show = !show" />
	</div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
