<!--В разработке!!! Ждём логику карты...-->

<script lang="ts" setup>
import PointSlider from './PointSlider/index.vue';
import Tabs from './Tabs/index.vue';
import Info from './Info/index.vue';

const className = 'compilation';
</script>
<template>
	<div :class="className">
		<div :class="`${className}__block`">
			<Info />
		</div>
		<div :class="`${className}__block`">
			<Tabs />
			<PointSlider />
		</div>

		<!--   Здесь будет карта   -->
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
