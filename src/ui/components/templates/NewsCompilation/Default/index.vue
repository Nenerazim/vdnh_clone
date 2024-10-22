<script setup lang="ts">
import {Button} from '@ui/widgets';

import type {INewsCompilationComponents} from '@app/Interfaces/NewsCompilation/NewsCompilation';
import {useColorStore} from '@app/Stores/ColorStore';

defineProps<{component: INewsCompilationComponents}>();

const showAll = ref(false);
const colorStore = useColorStore();
const className = 'news';
</script>
<template>
	<div :class="className" :style="{'--neutral_red': colorStore.currentGlobalColor}">
		<h1 :class="`${className}__title`">{{ component.title }}</h1>
		<div :class="`${className}__cards`">
			<template v-for="(newsPart, key, index) in component.items" :key="key">
				<h2 :class="[`${className}-subtitle`, {hide: !index}]">{{ key }}</h2>
				<div v-for="(item, j) in newsPart" :key="j" :class="`${className}__card`">
					<div :class="`${className}__card__poster`">
						<img :src="item.img_url" :alt="item.img_alt" :class="`${className}__card-image`" />
					</div>
					<h3 :class="`${className}__card__title`">{{ item.title }}</h3>
					<p :class="`${className}__card__description`">
						{{ item.description }}
					</p>
					<span :class="`${className}__card__time`">{{ item.time }}</span>
				</div>
			</template>
		</div>
		<Button v-if="!showAll" label="Показать еще" color="none" icon="showme" custom-class="show-more-btn" @click="showAll = !showAll" />
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
