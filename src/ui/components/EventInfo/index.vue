<script lang="ts" setup>
import {Button} from '@ui/widgets';
import type {IEventInfo} from '@app/Interfaces/Event';
import {useColorStore} from '@app/Stores/ColorStore';

const show = ref<boolean>(false);
defineProps<{component: IEventInfo}>();

const colorStore = useColorStore();
</script>

<template>
	<div v-if="component.title" class="main" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1>{{ component.title }}</h1>
		<transition-group class="block-info" name="list" tag="div">
			<div v-for="(text, index) in component.items" v-show="show || index < 3" :key="index" class="info">
				<div class="text" v-html="text.value"></div>
			</div>
		</transition-group>

		<div v-if="!show" class="button-wrapper">
			<Button color="none" icon="arrow-left" label="Читать далее" custom-class="read-more-btn" @click="show = true" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
