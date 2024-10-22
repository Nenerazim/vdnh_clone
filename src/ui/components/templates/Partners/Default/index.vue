<script setup lang="ts">
import {Button, Modal} from '@ui/widgets';
import type {IPartnersComponent, IImageBlock} from '@app/Interfaces/Page';
import ImageBlock from '@ui/components/templates/ImageBlock/Secondary/index.vue';

defineProps<{component: IPartnersComponent}>();
const showAll = ref(false);
const isModalShown = ref(false);
const selectedItem = ref<IImageBlock | null>(null);

const selectHandler = (item: IImageBlock) => {
	selectedItem.value = item;
	isModalShown.value = !isModalShown.value;
};
</script>
<template>
	<div class="content-block">
		<h1 class="title">{{ component?.title }}</h1>
		<div v-if="component.settings?.description" class="section-description">
			{{ component.settings.description }}
		</div>
		<div class="collections-grid">
			<div
				v-for="(item, index) in component.settings.items"
				v-show="showAll || index < 6"
				:key="item.id"
				class="collection-item"
				@click="selectHandler(item)"
			>
				<div class="img-wrapper">
					<img :src="item.settings.img_url" :alt="item.settings.img_alt" />
				</div>
				<h2 class="item-title">{{ item.title }}</h2>
			</div>
		</div>
		<Button v-if="!showAll" label="Показать еще" color="none" icon="showme" custom-class="show-more-btn" @click="showAll = !showAll" />
	</div>
	<Modal :is-shown="isModalShown" custom-class="modal" @close="isModalShown = false">
		<ImageBlock v-if="selectedItem && isModalShown" :component="selectedItem" />
	</Modal>
</template>
<style lang="scss" scoped>
@import './style';
</style>
