export interface IDisclosureValues {
	file_title: string;
	file: string;
}
export interface IDisclosureItems {
	block_title: string;
	values: IDisclosureValues[];
}

export interface IDisclosureComponents {
	name: 'disclosureAccordion' | 'disclosureDefault';
	items: IDisclosureItems[];
}
