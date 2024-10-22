<script setup lang="ts">
import type {UiButtonProps} from './types';
import {Icon} from '@ui/widgets';
import {NuxtLink} from '#components';

const className = 'ui-button';
const emit = defineEmits<{onClick: []}>();
const props = withDefaults(defineProps<UiButtonProps>(), {
	id: undefined,
	label: undefined,
	tag: 'button',
	color: 'default',
	icon: undefined,
	disabled: false,
	full: false,
	exact: true,
	type: 'submit',
	href: undefined,
	target: '_self',
	customClass: undefined,
	rel: undefined,
	size: 'lg'
});

const id = ref<string>(props.id ?? useId());
const getTagName = props.type === 'link' ? NuxtLink : props.tag;
const rel = props.rel ?? (props.target === '_blank' ? 'noopener noreferrer' : undefined);
</script>

<template>
	<component
		:is="getTagName"
		:id="id"
		:class="[
			className,
			props.customClass,
			{
				[`${className}-exact`]: props.exact,
				[`${className}-active`]: !props.exact,
				[`${className}-${props.color}`]: props.color,
				[`${className}-${props.size}`]: props.size,
				full: props.full
			}
		]"
		:href="props.href"
		:rel="rel"
		:type="props.type === 'link' ? undefined : props.type"
		:target="props.type === 'link' ? props.target : undefined"
		v-bind="{disabled: props.disabled}"
		@click="emit('onClick')"
	>
		<Icon v-if="props.icon" :name="props.icon" />
		<span v-if="props.label">{{ props.label }}</span>
	</component>
</template>

<style lang="scss" scoped>
@import './style';
</style>
