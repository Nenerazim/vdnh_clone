<script lang="ts" setup>
import {usePageStore} from '@app/Stores/PageStore';

const store = usePageStore();
const {page, components} = await store.getCurrentPage();
</script>

<template>
	<div class="page">
		<component :is="components[index]" v-for="(component, index) in page?.components" :id="index" :key="index" :component="component" />
	</div>
</template>
