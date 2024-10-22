<script lang="ts" setup>
import {Button} from '@ui/widgets';
import type {IInfoEvent} from '@app/Interfaces/Page';

const show = ref(false);
defineProps<{component: IInfoEvent}>();
</script>
<template>
	<div class="main">
		<h1>{{ component.title }}</h1>
		<transition-group class="block-info" name="list" tag="div">
			<div v-for="(text, index) in component.settings.items" v-show="show || index < 3" :key="index" class="info">
				<div v-if="text.mark" class="mark">
					<div></div>
				</div>
				<div class="text">{{ text.description }}</div>
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
