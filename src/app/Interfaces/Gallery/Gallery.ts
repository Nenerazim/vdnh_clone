export interface IcurrentFilter {
	year: string[];
	category: string[];
}
export interface IGalleryItems {
	href: string | null;
	img_url: string | null;
	title: string;
	type: string;
	day: string;
}

export interface IGallery {
	template: string;
	title: string;
	category: string[];
	year: string[];
	items: IGalleryItems[];
}
