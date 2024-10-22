<script lang="ts" setup>
import {UiAccordion, Button, Icon, Slider} from '@ui/widgets';
import type {IContacts} from '@app/Interfaces/Contacts';

defineProps<{component: IContacts}>();

const openedAcc = ref<Set<number>>(new Set([]));

function showAccordion(index: number) {
	openedAcc.value.has(index) ? openedAcc.value.delete(index) : openedAcc.value.add(index);
}
</script>
<template>
	<div :style="{'--neutral_red': component.color}" class="contacts">
		<div class="info">
			<h1>{{ component.settings.name }}</h1>
			<UiAccordion
				v-for="(item, index) in component.settings.items"
				:key="item.title"
				:class="{info__acc_open: openedAcc.has(index)}"
				:is-open="openedAcc.has(index)"
				class="info__acc"
			>
				<template #title>
					<h3 @click="showAccordion(index)">{{ item.title }}</h3>
				</template>
				<template #default>
					<div class="accordion-content">
						<div class="communication-methods">
							<div v-for="i in item['communication-methods']" :key="i.title" class="communication-methods__row">
								<span class="communication-methods__title">
									<Icon v-if="i.title === 'Телефон'" :height="16" :name="'phone-grey'" :width="16" />
									{{ i.title }}
								</span>
								<span class="communication-methods__desc">{{ i.description }}</span>
							</div>
						</div>
						<div v-if="item.btn" class="accordion-content__btns">
							<Button
								v-for="btn in item.btn"
								:key="btn.href"
								:color="btn.type === 'link' ? 'none' : 'primary'"
								:label="btn.text"
								type="link"
								:href="btn.href"
							/>
						</div>
					</div>
				</template>
			</UiAccordion>
		</div>
		<div class="best-people">
			<h2>{{ component.settings.title }}</h2>
			<div class="card-wrapper">
				<div v-for="people in component.settings.peoples" :key="people.title" class="card">
					<div class="img">
						<img :alt="people.alt" :src="people.img_url" />
					</div>
					<h4 class="title">{{ people.title }}</h4>
					<div class="description">{{ people.description }}</div>
				</div>
			</div>
			<div class="card-wrapper card-wrapper__swiper">
				<!--    TODO  добавить инициализацию, при размере экрана менее 640px  -->
				<Slider
					v-if="component.settings?.peoples || null"
					:navigator="1"
					:slides-data="component['settings'].peoples"
					:slides-per-view="'auto'"
					:space-between="8"
					loop
				>
					<template #slide="{title, alt, description, img_url}">
						<div :key="title" class="card">
							<div class="img">
								<img :alt="alt" :src="img_url" />
							</div>
							<h4 class="title">{{ title }}</h4>
							<div class="description">{{ description }}</div>
						</div>
					</template>
				</Slider>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import './style';
</style>
