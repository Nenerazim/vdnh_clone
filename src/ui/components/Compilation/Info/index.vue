<script lang="ts" setup>
const className = 'info';
</script>
<template>
	<div :class="className">
		<div :class="`${className}__poster`">
			<img src="/images/Collection/1.png" alt="picture" :class="`${className}__poster__img`" />
			<h1 :class="`${className}__poster__title`">Куда сходить в выходные на ВДНХ</h1>
		</div>
		<p :class="`${className}__description`">
			Приглашаем провести незабываемые выходные на ВДНХ. Для гостей пройдут познавательные экскурсии, спортивные активности, лекции, мастер-классы,
			спектакли и многое другое.
		</p>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
