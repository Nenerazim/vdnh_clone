import type {EventComponentsList} from './Components';

export interface IEvent {
	type: 'free' | 'paid';
	color: string;
	widget: {
		id?: number;
		source: boolean;
	};
	components: EventComponentsList[];
}
