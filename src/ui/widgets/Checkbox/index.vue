<script setup lang="ts">
import type {UiCheckboxProps} from './types';

const className = 'ui-check';

const model = defineModel<boolean>({required: true});
const props = withDefaults(defineProps<UiCheckboxProps>(), {
	id: undefined,
	label: '',
	disabled: false,
	info: undefined,
	name: '',
	customClass: undefined,
	color: 'default'
});

const uid = useId();
</script>

<template>
	<div :class="[className, {disabled: props.disabled}]">
		<input :id="uid" v-model="model" :name="props.name" :class="`${className}-input`" type="checkbox" v-bind="{disabled: props.disabled}" />
		<label v-if="label" :for="uid" :class="[`${className}-label`, props.customClass, {[`${className}-${props.color}`]: props.color}]">
			{{ props.label }}
		</label>
		<p v-if="info" :class="`${className}-message`">
			{{ info }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
