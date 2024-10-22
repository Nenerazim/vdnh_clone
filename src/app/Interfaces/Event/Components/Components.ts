import type {IBaseTitledIndexedComponent} from '@app/Interfaces/Shared/Components';

interface IEventComponent extends IBaseTitledIndexedComponent {}

export type EventSliderCategory = {
	id: number;
	title: string;
	url: string;
	img_url: string;
};

export type EventSliderSlide = {
	img_url: string;
	title: string;
	description: string;
};

export interface IEventSlider extends IEventComponent {
	img_url?: string;
	description?: string;
	items: EventSliderSlide[];
	categories: EventSliderCategory[];
	name: 'EventSlider';
}

export type EventTimeManagerItem = {
	time: string;
	day: string;
};

export interface IEventTimeManager extends IEventComponent {
	description: string;
	items: EventTimeManagerItem[];
	name: 'EventTimeManager';
}

export type EventInfoItem = {
	value: string;
};

export interface IEventInfo extends IEventComponent {
	items: EventInfoItem[];
	name: 'EventInfo';
}

export type EventAccordionItem = {
	description: string;
	title: string;
	value: number;
};

export interface IEventAccordion extends IEventComponent {
	description: string;
	items: EventAccordionItem[];
	name: 'EventAccordion';
}

export interface IEventPlace extends IEventComponent {
	img_url: string;
	img_text: string;
	description: string;
	href: string;
	btn_label: string;
	name: 'EventPlace';
}

export type EventComponentsList = IEventSlider | IEventTimeManager | IEventInfo | IEventAccordion | IEventPlace;
