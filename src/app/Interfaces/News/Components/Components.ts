import type {IBaseNamedComponent} from '@app/Interfaces/Shared/Components';

export type NewsSliderItem = {
	img_url: string;
	img_alt: string;
};

export interface INewsSlider extends IBaseNamedComponent {
	items: NewsSliderItem[];
	name: 'NewsSlider';
}

export interface INewsInfo extends IBaseNamedComponent {
	title: string;
	description: string;
	name: 'Info';
}

export type INewsMoreNewsItem = {
	title: string;
	description: string;
	href: string;
	date: string;
	img_url: string;
	img_alt: string;
};

export interface INewsMore extends IBaseNamedComponent {
	items: INewsMoreNewsItem[];
	name: 'NewsMore';
}
