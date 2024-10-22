<script lang="ts" setup>
import {ButtonBack} from '@ui/widgets';
import {useNewsStore} from '@app/Stores/NewsStore';

const store = useNewsStore();
const {params} = useRoute();
const {page, components} = await store.getCurrentNewsItem(params.slug.toString());
</script>

<template>
	<div class="page">
		<ButtonBack />
		<component :is="components[index]" v-for="(component, index) in page?.components" :key="index" :component="component" />
	</div>
</template>
