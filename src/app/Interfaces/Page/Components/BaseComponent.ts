import type {IBaseComponentWithTemplate} from '@app/Interfaces/Shared/Components';

export interface IComponent extends IBaseComponentWithTemplate {
	id?: number;
	color: string;
	title?: string;
	description?: string;
}
