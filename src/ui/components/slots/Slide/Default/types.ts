export type UiDefaultSlideTemplate = {
	title: string;
	description: string | null;
	time?: string;
	minPrice?: string | number;
	imgUrl: string;
	href?: string;
	btnLabel?: string;
	btnPosition?: 'space-between' | 'flex-start';
	color: string;
};
