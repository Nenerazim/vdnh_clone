<script setup lang="ts">
import {Icon} from '@ui/widgets';
import {useNavStore} from '@app/Stores/NavStore';

const store = useNavStore();

const showText = ref<number | null>();
const toggleItem = (index: number) => {
	const isNumber = Number(index);
	showText.value = showText.value === isNumber ? null : isNumber;
};
</script>

<template>
	<footer>
		<div class="content-block" :style="{'--neutral_red': store.globalColor}">
			<div class="footer-grid">
				<div v-for="(footerText, index) in store.state.footer?.settings?.items" :key="footerText.heading" class="footer-text">
					<div class="heading" @click="toggleItem(index)">
						{{ footerText.heading }} <Icon name="showme" :height="18" :width="18" :class="{rotate: showText === Number(index)}" />
					</div>
					<ul :class="{show: showText === Number(index)}">
						<li v-for="link in footerText.links" :key="link.name">
							<NuxtLink :to="link.href">{{ link.name }}</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="content-store">
					<div class="text-store">
						<p>
							В приложении Россия ВДНХ -афиша мероприятий каждый день, описание и аудиогиды участников выставки, карта ВДНХ и маршуты к павильнонам.
						</p>
						<div class="store">
							<img src="/Group.jpg" alt="" :height="112" :width="112" />
							<div class="store-img">
								<a :href="'/'">
									<img src="/mobilestore/googleplay%201.jpg" alt="" :width="111" :height="32" />
								</a>
								<a :href="'/'">
									<img src="/mobilestore/appstore%201.png" alt="" :width="111" :height="33" />
								</a>
								<a :href="'/'">
									<img src="/mobilestore/rustore%201.png" alt="" :width="100" :height="33" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-info">
					<div class="social">
						<div class="contact">
							<a class="phone" :href="`tel:${store.state.footer?.settings.phone}`">{{ store.state.footer?.settings.phone }}</a>
							<a class="email" :href="`mailto:${store.state.footer?.settings.email}`">{{ store.state.footer?.settings.email }}</a>
						</div>
						<div class="partners">
							<p>Партнеры</p>
							<div class="partners-svg">
								<div v-for="(partners, index) in store.state.footer?.settings.partners" :key="index">
									<a :href="partners.href">
										<img :src="partners.img_url" :alt="partners.href" />
									</a>
								</div>
							</div>
						</div>
						<div class="social-svg">
							<a :href="store.state.footer?.settings.vk || '/'">
								<Icon name="vk-grey" :height="32" :width="32" />
							</a>
							<a :href="store.state.footer?.settings.ok || '/'">
								<Icon name="ok-grey" :height="32" :width="32" />
							</a>
							<a :href="store.state.footer?.settings.yt || '/'">
								<Icon name="yt-grey" :height="32" :width="32" />
							</a>
							<a :href="store.state.footer?.settings.zen || '/'">
								<Icon name="zen-grey" :height="32" :width="32" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
