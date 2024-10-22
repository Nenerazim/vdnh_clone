<script lang="ts" setup>
import {Button} from '@ui/widgets';
import type {IEventPlace} from '@app/Interfaces/Event';
import {useColorStore} from '@app/Stores/ColorStore';

defineProps<{component: IEventPlace}>();

const colorStore = useColorStore();
</script>
<template>
	<div class="placeInfo" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1>{{ component.title }}</h1>
		<span>{{ component.description }}</span>
		<div class="containerImg">
			<div class="containerTitle">{{ component.img_text }}</div>
			<Button :label="component.btn_label" class="btn" type="link" :href="component.href" />
			<img :src="component.img_url" :alt="component.title" class="img" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
