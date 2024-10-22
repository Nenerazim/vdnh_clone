<script setup lang="ts">
import type {ModalProps} from './types';
import {Icon} from '@ui/widgets';
import {ScrollHandler} from '@app/Helpers/ScrollHandler';

const emit = defineEmits<{close: []}>();
const props = withDefaults(defineProps<ModalProps>(), {
	isShown: false,
	customClass: ''
});

const modalRef = ref<HTMLDialogElement | null>(null);

const closeHandler = () => {
	if (modalRef.value) {
		emit('close');
		modalRef.value.close();
		ScrollHandler.toggleScrolling('body');
	}
};

watch(
	() => props.isShown,
	(currentValue) => {
		if (currentValue && modalRef.value) {
			modalRef.value.showModal();
			ScrollHandler.toggleScrolling('body');
		}
	}
);
</script>

<template>
	<dialog ref="modalRef" class="modal" :class="customClass" @click.self="closeHandler">
		<Icon :width="24" :height="24" name="close" custom-class="close-btn" @click="closeHandler" />
		<slot> Модальное окно </slot>
	</dialog>
</template>

<style lang="scss" scoped>
@import './style';
</style>
