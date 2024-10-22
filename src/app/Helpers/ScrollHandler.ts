import {ref} from 'vue';
export class ScrollHandler {
	static foundSelector = ref<HTMLElement | null>(null);
	// static previousPosition = ref<number>(0);
	// static currentPosition = ref<number>(0);
	// static isHeaderShown = ref<boolean>(true);
	// public static color = ref<string>('230, 60, 70'); // перенести
	// public static ShowHeader(e: Event) {
	// 	this.currentPosition.value = (e.target as HTMLDivElement).scrollTop;
	// }

	public static toggleScrolling(selectorName: string) {
		if (!this.foundSelector.value) {
			this.foundSelector.value = document.querySelector(selectorName);
		}
		if (this.foundSelector.value) {
			this.foundSelector.value.style.overflowY === 'hidden'
				? (this.foundSelector.value.style.overflowY = 'auto')
				: (this.foundSelector.value.style.overflowY = 'hidden');
		}
	}
}
