<script setup lang="ts">
import {MaskInput} from './utils/mask';
import type {UiInputProps} from './types';
import {Icon} from '@ui/widgets';

const className = 'ui-input';

const model = defineModel<string>({required: true});
const emit = defineEmits<{
	(e: 'onInput', model: string): void;
	(e: 'onTab', model: string): void;
	(e: 'onFocus', model: string): void;
	(e: 'onEnter', model: string): void;
	(e: 'onClear', model: string): void;
	(e: 'onChange', model: string): void;
}>();
const props = withDefaults(defineProps<UiInputProps>(), {
	type: 'text',
	inputMode: 'text',
	maxLength: undefined,
	onlyNum: false,
	lowerCase: false,
	error: undefined,
	focus: false,
	icon: undefined,
	disabled: false,
	mask: undefined,
	label: '',
	placeholder: '',
	id: undefined,
	customClass: undefined,
	color: 'default'
});

const uid = useId();
const inputRef = ref<HTMLInputElement | null>(null);
const isShowPassword = ref<boolean>(false);
const maskInstance = ref<MaskInput | null>(null);

const onInput = () => {
	if (props.lowerCase) {
		model.value = model.value.toLowerCase();
	}
	if (props.onlyNum) {
		model.value = model.value.replace(/\D/g, '');
	}
	if (props.maxLength) {
		model.value = model.value.slice(0, props.maxLength);
	}

	emit('onInput', model.value);
};

const onEnter = () => {
	inputRef.value?.blur();
	emit('onChange', model.value);
	emit('onEnter', model.value);
};

const onTab = () => {
	emit('onChange', model.value);
	emit('onTab', model.value);
};

const onClear = () => {
	model.value = '';
	emit('onClear', model.value);
	nextTick(() => {
		emit('onChange', model.value);
		inputRef.value?.focus();
	});
};

onMounted(() => {
	if (props.mask && inputRef.value) {
		maskInstance.value = new MaskInput(inputRef.value, props.mask);
		maskInstance.value?.init();
	}
	if (props.focus) {
		inputRef.value?.focus();
	}
});

onUnmounted(() => {
	if (maskInstance.value) {
		maskInstance.value?.destroy();
	}
});
</script>

<template>
	<div :class="className">
		<label v-if="props.label" :for="props.id" :class="`${className}-label`">
			{{ props.label }}
		</label>
		<div
			:class="[
				`${className}-box`,
				props.customClass,
				{[`${className}-${props.color}`]: props.color},
				{errored: props.error, disabled: props.disabled}
			]"
		>
			<Icon v-if="props.icon" :name="props.icon" />
			<input
				:id="uid"
				ref="inputRef"
				v-model="model"
				:type="isShowPassword ? 'text' : props.type"
				:placeholder="placeholder"
				:class="`${className}-input`"
				v-bind="{disabled: props.disabled}"
				@keydown.enter.stop.prevent="onEnter"
				@keyup.esc="onClear"
				@keyup.tab="onTab"
				@input="onInput"
				@focus="emit('onFocus', model)"
				@blur="emit('onChange', model)"
			/>
			<button
				v-if="props.type === 'password'"
				:class="`${className}-actionpass`"
				tabindex="-1"
				type="button"
				@click.stop.prevent="isShowPassword = !isShowPassword"
				@mousedown.stop.prevent
			>
				<Icon name="eye-closed" />
			</button>
			<button v-else :class="`${className}-action`" tabindex="-1" type="button" @click.stop.prevent="onClear" @mousedown.stop.prevent>
				<Icon name="close" />
			</button>
		</div>
		<p v-if="props.maxLength" :class="`${className}-message`">Кол-во знаков: {{ model.length }} из {{ props.maxLength }}</p>
		<p v-if="props.error" :class="`${className}-error`">{{ error }}</p>
	</div>
</template>

<style lang="scss" scoped>
@import './style';
</style>
