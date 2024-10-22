<script setup lang="ts">
import {useNewsCompilationStore} from '@app/Stores/NewsCompilationStore';

const store = useNewsCompilationStore();
const {page, components} = await store.getCurrentNewsCompilation('/');
</script>

<template>
	<div class="page">
		<component :is="components[index]" v-for="(component, index) in page?.components" :key="index" :component="component" />
	</div>
</template>
