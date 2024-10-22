export interface IBaseNamedComponent {
	name: string;
}

export interface IBaseComponentWithTemplate extends IBaseNamedComponent {
	template: 'Default' | 'Primary' | 'Secondary' | 'Tertiary' | 'Quaternary' | 'Fivefold' | 'Sixfold';
}

export interface IBaseTitledIndexedComponent extends IBaseNamedComponent {
	title: string;
	id: number;
}
