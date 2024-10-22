import type {IRoutesBuilding, IRoutesPreview} from './Components';

export interface IRoutes {
	color: string;
	components: [IRoutesPreview, IRoutesBuilding];
}
