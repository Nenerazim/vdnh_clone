export interface IContactsBtn {
	type: string;
	text: string;
	href: string;
}

export interface IContactsCommunicationMethod {
	title: string | 'Телефон';
	description: string;
}
export interface IContactsItems {
	title: string;
	description: string;
	'communication-methods': IContactsCommunicationMethod[] | [];
	btn: IContactsBtn[];
}
export interface IContactsPeoples {
	img_url: string;
	alt: string;
	title: string;
	description: string;
}

export interface IContactsSettings {
	items: IContactsItems[];
	name: string;
	title: string;
	peoples: IContactsPeoples[];
}
