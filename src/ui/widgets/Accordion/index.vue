<script lang="ts" setup>
import type {UiAccordion} from './types';
import {Icon} from '@ui/widgets';

withDefaults(defineProps<UiAccordion>(), {
	isOpen: false,
	positionIconLeft: false,
	animation: true
});
</script>

<template>
	<div class="ui-accordion">
		<div :class="{'ui-accordion__title-wrap_position-icon': positionIconLeft}" class="ui-accordion__title-wrap">
			<div class="ui-accordion__title">
				<slot name="title" />
			</div>
			<div
				:class="[{'ui-accordion__icon_rotate-rd': isOpen && animation}, {'ui-accordion__icon_rotate-ld': isOpen && positionIconLeft && animation}]"
				class="ui-accordion__icon"
			>
				<slot name="icon">
					<Icon name="arrow-short-right-grey" :style="{transform: positionIconLeft ? 'scale(-1, -1)' : ''}" />
				</slot>
			</div>
		</div>
		<div :class="{show: isOpen}" class="ui-accordion__content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
