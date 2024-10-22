<script lang="ts" setup>
import {ref} from 'vue';
import {Button, Input, Radio} from '@ui/widgets';
import type {IFeedbackComponent} from '@app/Interfaces/Page';

defineProps<{component: IFeedbackComponent}>();

const email = ref('');
const confirm = ref(true);

const className = 'feedback-form';
</script>

<template>
	<div :class="`${className}`" :style="{'--neutral_red': component.color}">
		<h2 :class="`${className}__title`">{{ component.settings.label }}</h2>
		<form :class="`${className}__form`" :name="className" action="#">
			<div :class="`${className}__email`">
				<Input v-model="email" name="email" :class="`${className}__input`" placeholder="Введите email" type="email" />
				<Button color="primary" label="Отправить" :custom-class="`${className}__btn`" />
				<div :class="`${className}__confirm`">
					<Radio
						v-model="confirm"
						name="confirm"
						label="Даю согласие на обработку персональных данных и соглашаюсь с политикой обработки персональных данных."
						:custom-class="`${className}__radio`"
					/>
				</div>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
