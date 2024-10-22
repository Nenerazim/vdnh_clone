<script setup lang="ts">
import type {UiRadioProps} from '@ui/widgets/Radio/types';

const className = 'ui-radio';

const model = defineModel<unknown>({required: true});
const props = withDefaults(defineProps<UiRadioProps>(), {
	label: '',
	disabled: false,
	name: '',
	id: undefined,
	customClass: undefined,
	color: 'default'
});

const uid = useId();
</script>

<template>
	<div :class="`${className}`">
		<input
			:id="uid"
			v-model="model"
			:value="props.value"
			:name="props.name"
			:class="`${className}-input`"
			type="radio"
			v-bind="{disabled: props.disabled}"
		/>
		<label v-if="label" :for="uid" :class="[`${className}-label`, props.customClass, {[`${className}-${props.color}`]: props.color}]">
			{{ props.label }}
		</label>
	</div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
