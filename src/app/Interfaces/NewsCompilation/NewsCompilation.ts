export interface INewsCompilationMonth {
	title: string;
	description: string;
	time: string;
	img_url: string;
	img_alt: string;
}
export interface INewsCompilationItems {
	[month: string]: INewsCompilationMonth[];
}
export interface INewsCompilationComponents {
	name: 'NewsCompilation';
	template: 'Default' | 'Secondary';
	title: string;
	items: INewsCompilationItems;
}

export interface INewsCompilation {
	components: INewsCompilationComponents[];
	color: string;
}
