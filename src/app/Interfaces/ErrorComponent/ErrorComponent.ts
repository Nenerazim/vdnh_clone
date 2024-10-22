/**
 * Плитка мероприятия
 *
 * @param {title} title - Заголовок блока
 * @param {string} type - тип ивента (экскурсия еще что то)
 * @param {string} time - дата мероприятия
 * @param {string} img_url - сслыка на картинку
 * @param {boolean} advertising - это рекламма?
 * @param {string} href - ссылка на ивент
 */

export interface IErrorComponentItems {
	title: string;
	type: string;
	time: string;
	img_url: string;
	advertising: boolean;
	href: string;
}

/**
 * Компонент для стр 404
 *
 * @param {string} title - Заголовок компонента 404
 * @param {IErrorComponentItems[]} items - Массив с плитками ивентов
 */
export interface IErrorComponent {
	title: string;
	items: IErrorComponentItems[];
}
