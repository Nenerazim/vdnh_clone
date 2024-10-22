<script lang="ts" setup>
import {UiAccordion, Button, Icon} from '@ui/widgets';
import type {IContactsComponent} from '@app/Interfaces/Page';

const props = defineProps<{component: IContactsComponent}>();

const openedAcc = ref<IContactsComponent['settings']['items'][0]>(props.component.settings.items[0]);
openedAcc.value = props.component.settings.items[0];
</script>
<template>
	<div :style="{'--neutral_red': component.color}" class="contacts">
		<div class="info">
			<UiAccordion
				v-for="item in component.settings.items"
				:key="item.title"
				:class="{info__acc_open: openedAcc.title === item.title}"
				:is-open="openedAcc.title === item.title"
				class="info__acc"
				@click="openedAcc = item"
			>
				<template #title>
					<h3 @click="openedAcc.title === item.title">{{ item.title }}</h3>
				</template>
				<template #default>
					<div class="accordion-content accordion-content_tablet">
						<div class="communication-methods">
							<div v-for="i in item['communication-methods']" :key="i.title" class="communication-methods__row">
								<span class="communication-methods__title">
									<Icon v-if="i.title === 'Телефон'" :height="16" :name="'phone-grey'" :width="16" />
									{{ i.title }}
								</span>
								<span class="communication-methods__desc">{{ i.description }}</span>
							</div>
						</div>
						<Button v-if="item.description" :label="item.description" class="accordion-content__desc" color="none" tag="a" />
						<div v-if="item.btn" class="accordion-content__btns">
							<Button v-for="btn in item.btn" :key="btn.href" :color="'primary'" :label="btn.text" />
						</div>
					</div>
				</template>
			</UiAccordion>
		</div>
		<div class="accordion-content accordion-content_laptop">
			<div class="communication-methods">
				<div v-for="i in openedAcc['communication-methods']" :key="i.title" class="communication-methods__row">
					<span class="communication-methods__title">
						<Icon v-if="i.title === 'Телефон'" :height="16" :name="'phone-grey'" :width="16" />
						{{ i.title }}
					</span>
					<span class="communication-methods__desc">{{ i.description }}</span>
				</div>
			</div>
			<Button v-if="openedAcc.description" :label="openedAcc.description" class="accordion-content__desc" color="none" tag="a" />
			<div v-if="openedAcc.btn" class="accordion-content__btns">
				<Button v-for="btn in openedAcc.btn" :key="btn.href" :color="'primary'" :label="btn.text" />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
