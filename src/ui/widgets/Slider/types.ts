export type UiSliderProps<T> = {
	initialSlide?: number;
	slidesPerView?: number | 'auto';
	spaceBetween?: number;
	navigator?: number | false;
	crashBox?: boolean;
	loop?: boolean;
	centeredSlides?: boolean;
	slideNextClass?: string;
	slidesData?: T[];
};
