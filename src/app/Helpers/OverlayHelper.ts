import {ref} from 'vue';

export class OverlayHelper {
	private static foundSelector = ref<HTMLElement | null>(null);
	public static isPopupShown = ref<boolean>(false);

	private static followScrolling() {
		window.removeEventListener('scroll', this.followScrolling);
		this.hideOverlay();
	}

	private static scrollHandler() {
		if (this.foundSelector.value) {
			window.addEventListener('scroll', this.followScrolling.bind(OverlayHelper));
		}
	}

	public static showOverlay(selectorName?: string) {
		if (!this.foundSelector.value && selectorName) {
			this.foundSelector.value = document.querySelector(selectorName);
		}
		if (this.foundSelector.value) {
			this.isPopupShown.value = true;
			if (!this.foundSelector.value.classList.contains('overlay')) {
				this.foundSelector.value.classList.add('overlay');
				this.scrollHandler();
			}
		}
	}

	public static hideOverlay() {
		if (this.foundSelector.value) {
			this.isPopupShown.value = false;
			if (this.foundSelector.value.classList.contains('overlay')) {
				this.foundSelector.value.classList.remove('overlay');
			}
		}
	}
}
