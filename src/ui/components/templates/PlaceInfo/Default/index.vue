<script lang="ts" setup>
import {Button} from '@ui/widgets';
import type {IPlaceInfo} from '@app/Interfaces/Page';
defineProps<{component: IPlaceInfo}>();
</script>
<template>
	<div class="placeInfo">
		<h1>{{ component.title }}</h1>
		<span>{{ component.description }}</span>
		<div class="containerImg">
			<div class="containerTitle">{{ component.settings.title }}</div>
			<Button label="Подробнее" class="btn" type="link" :href="component.settings.href" />
			<img :src="component.settings.img_url" alt="component.title" class="img" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
