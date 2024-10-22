<script setup lang="ts">
import type {UiIconProps} from './types';
import sprite from './sprite/icons.svg';

const className = 'ui-icon';

const props = withDefaults(defineProps<UiIconProps>(), {
	width: 24,
	height: 24,
	customClass: undefined
});
</script>

<template>
	<div :class="[className, props.customClass]">
		<svg :width="props.width" :height="props.height">
			<use :href="`${sprite}#${props.name}`" class="icon" />
		</svg>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
