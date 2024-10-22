<script lang="ts" setup>
import GalleryGrid from '@ui/components/GalleryGrid';
import GalleryModal from '@ui/components/GalleryModal';
import {ScrollToComponent} from '@app/Helpers/ScrollToComponent';
import {useGalleryStore} from '@app/Stores/GallerySrore';

const store = useGalleryStore();
const page = await store.getCurrentGallery('/');
</script>

<template>
	<div class="page">
		<GalleryGrid :component="page.page" />
		<div v-if="ScrollToComponent.currentBrick.value !== -1" class="modal-container">
			<div class="modal-overlay" @click="ScrollToComponent.currentBrick.value = -1" />
			<div class="modal-content">
				<GalleryModal :component="page.page" />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.modal-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1001;
}

.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(var(--neutral_black), 0.5);
}

.modal-content {
	width: 80%;
	position: fixed;
	border-radius: 16px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: rgb(var(--neutral_white));
}
</style>
