<script lang="ts" setup>
import NavigationPanel from '@ui/components/NavigationPanel';
import {ButtonBack} from '@ui/widgets';
import {useContentStore} from '@app/Stores/ContentStore';

const store = useContentStore();
const {params} = useRoute();
const {page, components, componentNavigation} = await store.getCurrentContentPage(params.slug.toString());
</script>

<template>
	<div class="page">
		<ButtonBack />
		<div class="content">
			<div class="component-mini">
				<component :is="components[index]" v-for="(component, index) in page?.components" :id="index" :key="index" :component="component" />
			</div>
			<div class="widget">
				<div class="widget-box">
					<NavigationPanel :navigation="componentNavigation" />
					<div class="navigator" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.content {
	position: relative;
	display: grid;
	grid-template-columns: repeat(13, 1fr);
	@media (max-width: 1240px) {
		padding: 0;
	}
	.component-mini {
		display: flex;
		flex-direction: column;
		gap: 32px;
		grid-column: auto / span 9;
		width: 100%;
		@media (max-width: 1150px) {
			grid-column: auto / span 8;
		}
		@media (max-width: 945px) {
			grid-column: auto / span 12;
		}
	}
	.widget {
		margin-left: 32px;
		display: flex;
		flex-direction: column;
		grid-column: auto / span 4;
		.widget-box {
			display: flex;
			flex-direction: column;
			gap: 24px;
			position: sticky;
			top: 100px;
		}
		@media (max-width: 1150px) {
			grid-column: auto / span 5;
		}
		@media (max-width: 945px) {
			display: none;
		}
	}
}
</style>
