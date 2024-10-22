import type {INewsSlider, INewsInfo, INewsMore} from './Components';

export interface INewsItem {
	color: string;
	components: (INewsSlider | INewsInfo | INewsMore)[];
}
