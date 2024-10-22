import type {IContentComponent} from './Components';

export interface IContent {
	id: number;
	title: string;
	color: string;
	components: IContentComponent[];
}
