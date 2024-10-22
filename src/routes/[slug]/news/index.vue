<script setup lang="ts">
import {useNewsCompilationStore} from '@app/Stores/NewsCompilationStore';

const store = useNewsCompilationStore();
const {params} = useRoute();
const {page, components} = await store.getCurrentNewsCompilation('/' + params.slug.toString() + '%2F');
</script>

<template>
	<div class="page">
		<component :is="components[index]" v-for="(component, index) in page?.components" :key="index" :component="component" />
	</div>
</template>
