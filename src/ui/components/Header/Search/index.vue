<script lang="ts" setup>
import {ref} from 'vue';
import {Icon, Modal, Button, Input} from '@ui/widgets';
import {useNavStore} from '@app/Stores/NavStore';

const className = 'header-search';
const store = useNavStore();
const search = ref('');
const isActiveSearch = ref(false);
const showWidget = ref(false);
</script>

<template>
	<div :class="[className, isActiveSearch ? `${className}_activeSearch` : '']" :style="{'--neutral_red': store.globalColor}">
		<div :class="`${className}__mobileLogo`" @click="navigateTo('/')">
			<Icon :height="20" :width="87" name="mobileLogo" />
			<Icon :height="30" :width="98" name="mobilePoster" />
		</div>

		<div :class="`${className}__search`">
			<Icon :class="`${className}__icon`" :height="32" :width="34" name="search" @click="isActiveSearch = !isActiveSearch" />
			<Input
				v-model="search"
				:class="`${className}__input`"
				:height="32"
				:width="33"
				custom-class="ui-input-none"
				placeholder="поиск по местам, событиям, новостям, правилам"
			/>
		</div>
		<div class="box-svg">
			<Icon :class="`${className}__icon`" :height="24" :width="24" name="market" @click="showWidget = true" />
			<!--			<Icon :class="`${className}__icon`" :height="24" :width="24" name="lang" />-->
			<Button color="transparent" label="Войти" custom-class="login-btn" @on-click="showWidget = true" />
		</div>
		<Modal :class="`${className}__modal`" :is-shown="showWidget" @close="showWidget = false">
			<iframe src="https://vdnh.re-work.pro/?actionId=1" title="TicketWidget" />
		</Modal>
	</div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
