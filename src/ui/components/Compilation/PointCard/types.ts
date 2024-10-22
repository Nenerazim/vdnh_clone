type CardDataType = {
	id: number | string;
	imageUrl: string;
	title: string;
	type: string;
	time: string;
	distance?: string;
};

export interface RoutePointCardProps {
	cardData: CardDataType;
}
