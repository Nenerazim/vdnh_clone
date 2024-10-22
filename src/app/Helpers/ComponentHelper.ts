import type {Component} from 'vue';
import type {IBaseComponentWithTemplate, IBaseNamedComponent, IBaseTitledIndexedComponent} from '@app/Interfaces/Shared/Components';

export class ComponentHelper {
	public static async getComponentsWithTemplate<T extends IBaseComponentWithTemplate[]>(components?: T) {
		const importedComponents: Promise<Component>[] = [];
		components?.forEach((component) => {
			importedComponents.push(
				import(`../../ui/components/templates/${component.name}/${component.template}/index.vue`).then((res) => res.default).catch(() => null)
			);
		});
		return await Promise.all(importedComponents);
	}

	public static async getNamedComponents<T extends IBaseNamedComponent[]>(components?: T) {
		const importedComponents: Promise<Component>[] = [];
		components?.forEach((component) => {
			importedComponents.push(import(`../../ui/components/${component.name}/index.vue`).then((res) => res.default).catch(() => null));
		});
		return await Promise.all(importedComponents);
	}

	public static createTitledIndexedList<T extends IBaseTitledIndexedComponent[]>(components?: T) {
		return components
			?.filter((components) => components.title)
			.map((title) => {
				return {
					name: title.title || '',
					index: title.id || 0
				};
			});
	}
}
