<script lang="ts" setup>
import {ButtonBack} from '@ui/widgets';
import {useRoutesStore} from '@app/Stores/RoutesStore';

const store = useRoutesStore();
const {params} = useRoute();
const {page, components} = await store.getCurrentRoutes(params.slug.toString());
</script>

<template>
	<div class="page">
		<ButtonBack />
		<component :is="components[index]" v-for="(component, index) in page?.components" :key="index" :component="component" />
	</div>
</template>
