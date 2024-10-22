ч
<script lang="ts" setup>
import {Button} from '@ui/widgets';
import type {INewsMore} from '@app/Interfaces/News';
import {useColorStore} from '@app/Stores/ColorStore';

defineProps<{component: INewsMore}>();

const show = ref(false);
const colorStore = useColorStore();
</script>

<template>
	<div class="components" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1>Еще новости</h1>
		<div class="brick-container">
			<div v-for="(brick, index) in component.items" v-show="show || index < 2" :key="index" class="brick">
				<img :src="brick.img_url" :alt="brick.img_alt" class="image" />
				<div class="textBlock">
					<div class="time">{{ brick.date }}</div>
					<div class="title">{{ brick.title }}</div>
					<div class="description">{{ brick.description }}</div>
					<Button label="Читать далее" color="transparent" type="link" :href="brick.href" icon="arrow-left" />
				</div>
			</div>
		</div>
		<Button v-if="!show" label="Показать еще" icon="showme" color="transparent" custom-class="show-more" @click="show = !show" />
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
