<script lang="ts" setup>
import {useDisclosureStore} from '@app/Stores/DisclosureStore';

const store = useDisclosureStore();
const {params} = useRoute();
const {page, components} = await store.getCurrentDisclosure(params.slug.toString());
</script>

<template>
	<component :is="components[index]" v-for="(component, index) in page?.components" :key="index" :component="component" :page-title="page?.title" />
</template>
