<script lang="ts" setup>
// import {ScrollHandler} from '@app/Helpers/ScrollHandler';
import Nav from '@ui/components/Header/NavPanel/index.vue';
import Search from '@ui/components/Header/Search/index.vue';
import MobileMenu from '@ui/components/Header/MobileMenu/index.vue';
import Footer from '@ui/components/templates/Footer/Primary/index.vue';

// const mobile = ref(false);
// onMounted(() => {
// 	checkScreen();
// 	window.addEventListener('resize', checkScreen);
// });
// onUnmounted(() => {
// 	window.removeEventListener('resize', checkScreen);
// });
// const checkScreen = () => {
// 	window.innerWidth <= 768 ? (mobile.value = true) : (mobile.value = false);
// };
// const scrollHandler = (e: Event) => {
// 	if (mobile.value === false) ScrollHandler.ShowHeader(e);
// };
</script>

<template>
	<div class="application">
		<div class="content">
			<div class="search">
				<Search />
			</div>
			<div class="header">
				<Nav />
			</div>
			<div class="wrap">
				<div class="slot-content">
					<slot />
					<Footer />
				</div>
			</div>
		</div>
		<div class="mobile">
			<MobileMenu />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@keyframes slideIn {
	from {
		transform: translateY(-100%);
	}
	to {
		transform: translateY(0);
	}
}
.header {
	animation: slideIn 0.5s ease forwards;
	max-width: 1366px;
	position: sticky;
	top: 0;
	z-index: 1000;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 32px;

	@media (max-width: 768px) {
		position: relative;
		margin-bottom: 16px;
		padding: 0;
	}

	@media (max-width: 398px) {
		margin-bottom: 8px;
	}

	&.show {
		transform: translateY(0);
		transition: transform 0.5s ease;
	}

	&.hidden {
		transform: translateY(-100%);
		transition: transform 0.5s ease;
	}
}
.application {
	position: relative;
}

.content {
	max-width: 1344px;
	margin: 0 auto;
	padding: 0 4px;
	overflow: hidden;

	@media (max-width: 768px) {
		padding: 0 8px;
	}

	@media (max-width: 398px) {
		padding: 0 12px;
	}
}

.bubbles-bg {
	z-index: -1;
	position: absolute;
	top: 50px;
	left: 0;
	object-fit: contain;
	width: 100%;
	height: 670px;
}

.wrap {
	display: flex;
	flex-direction: column;
	gap: 32px;
}

.mobile {
	display: none;
	bottom: 0;
	left: 0;
	width: 100%;
	position: sticky;
	z-index: 10;
	@media (max-width: 768px) {
		display: block;
	}
}

.slot-content {
	display: flex;
	flex-direction: column;
	gap: 32px;
	@media (max-width: 1024px) {
		gap: 24px;
	}
	@media (max-width: 768px) {
		gap: 16px;
	}
}
</style>
