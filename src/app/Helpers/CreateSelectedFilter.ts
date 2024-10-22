import {ref} from 'vue';
export class CreateSelectedFilter {
	static activeCategories = ref<string[]>([]);
	static visibleFilter = ref<string>('Афиша событий');
	public static handleFilterClick(name: string) {
		this.activeCategories.value.includes(name)
			? this.activeCategories.value.splice(this.activeCategories.value.indexOf(name), 1)
			: this.activeCategories.value.push(name);
		this.updateVisibleFilter();
	}

	public static updateVisibleFilter() {
		this.visibleFilter.value = this.activeCategories.value.length === 1 ? this.activeCategories.value[0] : 'Афиша событий';
	}
}
