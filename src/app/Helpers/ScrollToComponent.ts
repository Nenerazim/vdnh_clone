import {ref} from 'vue';
import type {IComponent} from '@app/Interfaces/Page';

interface NavigationItem {
	name: string;
	index: number;
}
export class ScrollToComponent {
	static currentBrick = ref<number>(-1);
	static navigationItem = ref<NavigationItem[]>([]);
	public static createArray(components: IComponent[]) {
		this.navigationItem.value = components
			.filter((components) => components.title)
			.map((title) => {
				return {
					name: title.title || '',
					index: title.id || 0
				};
			});
	}
}
