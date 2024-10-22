<script lang="ts" setup>
import ErrorNotFound from '@ui/components/ErrorNotFound';
import ErrorEvents from '@ui/components/ErrorEvents';
import Footer from '@ui/components/templates/Footer/Primary/index.vue';
import Nav from '@ui/components/Header/NavPanel/index.vue';
import Search from '@ui/components/Header/Search/index.vue';
import MobileMenu from '@ui/components/Header/MobileMenu/index.vue';
import {useErrorStore} from '@app/Stores/ErrorStore';

const store = useErrorStore();
const event = await store.getCurrentError();
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
					<div class="page">
						<ErrorNotFound />
						<ErrorEvents :component="event.page" />
					</div>
					<Footer />
					<div class="mobile">
						<MobileMenu />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'ui/assets/sass/variables/_colors.scss';
@import 'ui/assets/sass/variables/_mixins.scss';
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
	max-width: 1396px;
	margin: 0 auto;
	padding: 0 22px;
	@media (max-width: 768px) {
		padding: 0 16px;
	}
	@media (max-width: 396px) {
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
	height: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	position: fixed;
	z-index: 10;
	@media (max-width: 768px) {
		height: auto;
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
