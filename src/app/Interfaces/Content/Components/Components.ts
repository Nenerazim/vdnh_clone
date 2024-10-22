import type {IBaseTitledIndexedComponent} from '@app/Interfaces/Shared/Components';

export type ContentComponentName = 'ContentText' | 'ContentSlider' | 'ContentImage';

export interface IContentComponent extends IBaseTitledIndexedComponent {
	id: number;
	name: ContentComponentName;
	title: string;
	page_title?: string;
	description?: string;
	btn?: {
		href?: string;
		title?: string;
	};
	items: {
		img_url: string;
		img_alt: string;
	}[];
}
