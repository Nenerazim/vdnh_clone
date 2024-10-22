<script lang="ts" setup>
import {Button, ButtonBack} from '@ui/widgets';
import NavigationPanel from '@ui/components/NavigationPanel/index.vue';
import {useEventStore} from '@app/Stores/EventStore';
import {EventService} from '@app/Services/EventService';

const show = ref(false);
const store = useEventStore();
const {params} = useRoute();
const {page, components, componentNavigation} = await store.getCurrentEvent(params.slug.toString());
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
					<div class="frame-box">
						<Button label="Купить билеты" full color="primary" :style="{'--neutral_red': store.globalColor}" @click="show = !show" />
						<iframe
							v-if="show"
							:src="`https://ecom.vdnh.ru/?actionId=${page?.widget?.id}${page?.type === EventService.FREE_EVENT ? '&source=free_event' : ''}`"
							class="frame"
						/>
					</div>
					<NavigationPanel v-if="!show" :navigation="componentNavigation" class="nav" />
					<div class="navigator" />
				</div>
			</div>
		</div>
		<div class="mobile">
			<Button label="Купить билеты" full color="primary" :style="{'--neutral_red': store.globalColor}" @click="show = !show" />
			<iframe
				v-if="show"
				:src="`https://ecom.vdnh.ru/?actionId=${page?.widget?.id}${page?.type === EventService.FREE_EVENT ? '&source=free_event' : ''}`"
				class="frame"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.mobile {
	border-radius: 16px;
	margin: 0 16px;
	background: rgb(var(--neutral_white));
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 0;
	bottom: 0;
	left: 0;
	min-width: 100%;
	position: fixed;
	z-index: 3;
	@media (max-width: 768px) {
		height: 120px;
	}
}
.content {
	margin-top: 32px;
	position: relative;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	@media (max-width: 1240px) {
		padding: 0;
	}
	.component-mini {
		display: flex;
		flex-direction: column;
		gap: 32px;
		grid-column: auto / span 8;
		width: 100%;
		@media (max-width: 1150px) {
			grid-column: auto / span 7;
		}
		@media (max-width: 820px) {
			grid-column: auto / span 6;
		}
		@media (max-width: 768px) {
			grid-column: auto / span 12;
		}
	}
	.widget {
		gap: 32px;
		display: flex;
		flex-direction: column;
		grid-column: auto / span 4;
		align-items: flex-end;
		@media (max-width: 1150px) {
			grid-column: auto / span 5;
		}
		@media (max-width: 920px) {
			grid-column: auto / span 5;
		}
		@media (max-width: 820px) {
			grid-column: auto / span 6;
		}
		@media (max-width: 768px) {
			display: none;
		}
		.widget-box {
			width: 352px;
			display: flex;
			flex-direction: column;
			gap: 24px;
			position: sticky;
			top: 100px;
			@media (max-width: 920px) {
				width: 320px;
			}
			.frame-box {
				background: rgb(var(--neutral_white));
				border-radius: 16px;
			}
			.nav {
				max-width: 352px;
			}
		}
	}
	@media (max-width: 1024px) {
		gap: 24px;
	}
	@media (max-width: 945px) {
		margin-top: 0;
		gap: 16px;
		padding: 0 8px;
	}
}

.frame {
	height: 520px;
	width: 352px;
	@media (max-width: 945px) {
		width: 300px;
		height: 470px;
		max-width: 100%;
	}
}
</style>
