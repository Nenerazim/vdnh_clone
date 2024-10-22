<script lang="ts" setup>
import type {UiButtonBackProps} from './types';
import {Icon} from '@ui/widgets';
import UrlHelp from '@app/Helpers/urlHelp';
import {useColorStore} from '@app/Stores/ColorStore';

withDefaults(defineProps<UiButtonBackProps>(), {
	text: 'Назад'
});

const colorStore = useColorStore();

const breadcrumbsArray = UrlHelp.getBreadcrumbs();
</script>

<template>
	<div class="ui-button-back" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<Icon class="ui-button-back__icon" name="arrow-short-left" @click="$router.push({path: '/'})" />
		<slot :path-array="breadcrumbsArray">
			<NuxtLink :to="{path: '/'}">{{ text }}</NuxtLink>
		</slot>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
