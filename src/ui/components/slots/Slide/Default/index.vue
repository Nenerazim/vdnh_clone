<script setup lang="ts">
import type {UiDefaultSlideTemplate} from './types';
import {Button} from '@ui/widgets';

withDefaults(defineProps<UiDefaultSlideTemplate>(), {
	btnPosition: 'space-between'
});
</script>
<template>
	<div class="banner-slide">
		<img :src="imgUrl" :alt="title" class="image" />
		<div class="information">
			<h1 class="title">{{ title }}</h1>
			<div class="description">{{ description }}</div>
		</div>
		<div class="actions">
			<div class="date">{{ time }}</div>
			<div class="action-block" :style="{'justify-content': btnPosition}">
				<Button v-if="href" :label="btnLabel" type="link" :href="href" :style="{'--neutral_red': color}" class="button" />
				<Button
					v-if="minPrice"
					icon="ticket"
					color="primary"
					type="link"
					:label="`от ${minPrice} ₽`"
					:href="href"
					:style="{'--neutral_red': color}"
					class="button"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
