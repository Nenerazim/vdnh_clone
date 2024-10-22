import type {IComponent} from './BaseComponent';

export interface IInfoEvent extends IComponent {
	settings: {
		items: {
			description: string;
			mark: boolean;
			title?: string;
		}[];
	};
}

export interface IPlaceInfo extends IComponent {
	settings: {
		title: string;
		img_url: string;
		href: string;
	};
}

export interface IGridInfo extends IComponent {
	settings: {
		items: {
			img_url: string;
			time: string;
			title: string;
			description: string;
			href: string;
		}[];
	};
}

export interface ISliderDetailed extends IComponent {
	settings: {
		title: string;
		description: string;
		img_url: string;
		items: {
			img_url: string;
			title: string;
			description: string;
		}[];
		categories: {
			id: number;
			label: string;
			img_url: string;
		}[];
	};
}

export interface ICalendarComponent extends IComponent {
	settings: {
		id: number;
	}[];
}

export interface IThemeRoutesComponent extends IComponent {
	settings: {
		items: {
			title: string;
			img_url: string;
			time: string;
		}[];
	};
}

export interface IEventsComponent extends IComponent {
	// сделать как отдельный компонет и вставить его в календарь
	settings: {
		id: number;
		img_url: string;
		href: string;
		event: string;
		title: string;
		time: string;
		type: number;
	}[];
}

export interface ICollectionComponent extends IComponent {
	settings: {
		items: {
			id: number;
			title: string;
			events: number;
			places: number;
			img_url: string;
		}[];
	};
}

export interface IFeedbackComponent extends IComponent {
	settings: {
		label: string;
	};
}

export interface IFooterComponent extends IComponent {
	footer: {
		settings: {
			phone: string;
			email: string;
			google: string;
			appstore: string;
			rustore: string;
			vk: string;
			zen: string;
			ok: string;
			yt: string;
			partners: {
				img_url: string;
				href: string;
			}[];
			items: {
				heading: string;
				links: {
					href: string;
					name: string;
				}[];
			}[];
		};
	};
}

export interface IExhibitionComponent extends IComponent {
	settings: {
		items: {
			title: string;
			href: string;
			img_url: string;
		}[];
	};
}

export interface IPopularComponent extends IComponent {
	settings: {
		items: {
			title: string;
			min_price?: number;
			img_url: string;
			href: string;
			btn_label?: string;
		}[];
	};
}

export interface ISpecialOffersComponent extends IComponent {
	settings: {
		items: {
			btn_label?: string;
			title: string;
			href?: string;
			img_url: string;
			min_price?: number;
		}[];
	};
}
export interface INavigationPanel extends IComponent {
	settings: {
		title: string;
		default_option: boolean;
		items: {
			href: string;
			title: string;
		}[];
	};
}
export interface ISlider extends IComponent {
	settings: {
		items: {img_url: string; img_alt: string}[];
	};
}

export interface IBannerComponent extends IComponent {
	settings: {
		items: {
			img_url: string;
			title: string;
			description: string;
			min_price?: number;
			time?: string;
			start_date_time?: string;
			href: string;
			btn_label?: string;
		}[];
		item?: {
			img_url: string;
			title: string;
			btn_label: string;
			href: string;
		};
	};
}

export interface IContactsComponent extends IComponent {
	settings: {
		items: {
			title: string;
			description?: string;
			'communication-methods': {
				title: string | 'Телефон';
				description: string;
			}[];
			btn?: {
				text: string;
				href: string;
			}[];
		}[];
		title?: string;
		peoples?: {
			img_url: string;
			alt: string;
			title: string;
			description: string;
		}[];
	};
}

export interface ITextBlock extends IComponent {
	settings: {
		title: string;
		description: {
			mark: boolean;
			text: string;
		}[];
	};
}

export interface IImageBlock extends IComponent {
	settings: {
		description?: {
			mark: boolean;
			text: string;
		}[];
		title?: string;
		link?: {
			label: string;
			url: string;
		};
		img_url: string;
		img_alt: string;
	};
}

export interface ISliderBlock extends IComponent {
	settings: {
		title: string;
		description?: {
			mark: boolean;
			text: string;
		}[];
		items: {
			id: string | number;
			img_url: string;
			img_alt: string;
		}[];
	};
}

export interface IPartnersComponent extends IComponent {
	settings: {
		description: string;
		items: IImageBlock[];
	};
}

export interface IAccordion extends IComponent {
	settings: {
		items: {
			title: string;
			value: string;
			description: string;
		}[];
	};
}

export interface INewsComponent extends IComponent {
	settings: {
		// скисок частей новостей
		items: {
			[key: string]: {
				title: string; // заголовок новости
				description: string; // описание новости
				time: string; // время создание новости
				img_url: string; // url изображения
				img_alt: string; // альтернативный текст изображения
			}[];
		};
	};
}

export type ComponentList =
	| IFooterComponent
	| IBannerComponent
	| ICollectionComponent
	| IFeedbackComponent
	| IThemeRoutesComponent
	| IExhibitionComponent
	| ISpecialOffersComponent
	| IPopularComponent
	| IEventsComponent
	| ICalendarComponent
	| IPartnersComponent
	| ISliderDetailed
	| IInfoEvent
	| ITextBlock
	| IImageBlock
	| ISliderBlock
	| IContactsComponent
	| ISlider
	| IGridInfo
	| IPlaceInfo
	| IAccordion
	| INavigationPanel
	| INewsComponent;
