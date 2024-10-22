<script lang="ts" setup>
import {Button} from '@ui/widgets';
import {useNavStore} from '@app/Stores/NavStore';
import {OverlayHelper} from '@app/Helpers/OverlayHelper';

const className = 'navigation-panel';

const store = useNavStore();

const footerRef = ref<HTMLDivElement | null>(null);

const showFooterHandler = () => {
	OverlayHelper.showOverlay('body');

	if (OverlayHelper.isPopupShown.value && footerRef.value) {
		const timer = setTimeout(() => {
			footerRef.value?.focus();
			clearTimeout(timer);
		});
	}
};

const FooterComponent = defineAsyncComponent(() => import('../../templates/Footer/Default/index.vue'));
</script>

<template>
	<nav :class="`${className}`" :style="{'--neutral_red': store.globalColor}">
		<div v-if="store.state.navbar" class="slider-container">
			<div v-for="item in store.state.navbar" :key="item.key" class="slide" :class="{promo: item.is_promo}">
				<NuxtLink :to="item.href">{{ item.name }}</NuxtLink>
			</div>
			<div class="slide">
				<Button
					color="transparent"
					label="Ещё..."
					custom-class="more-btn"
					:class="{'active-btn': OverlayHelper.isPopupShown.value}"
					:disabled="OverlayHelper.isPopupShown.value"
					@mousedown="showFooterHandler"
				/>
			</div>
		</div>
		<transition name="fade">
			<div v-show="OverlayHelper.isPopupShown.value" ref="footerRef" class="footer" tabindex="0" @blur="OverlayHelper.hideOverlay">
				<FooterComponent />
			</div>
		</transition>
	</nav>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
