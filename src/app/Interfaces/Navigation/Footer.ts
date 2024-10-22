export type FooterTemplates = 'Default' | 'Primary' | 'Secondary';

/**
 * Партнер
 *
 * @param {string} href - ссылка на партнера
 * @param {string} img_url - изображение партнера
 */
export type Partner = {
	href: string;
	img_url: string;
};

/**
 * Ссылка в подвале
 *
 * @param {string} name - заголовок
 * @param {string} href - ссылка
 */
export type FooterLink = {
	name: string;
	href: string;
};

/**
 * Единичный блок подвала
 *
 * @param {string} heading - заголвок
 * @param {FooterLink[]} links - массив ссылок
 */
export type FooterElement = {
	heading: string;
	links: FooterLink[];
};

/**
 * Настройки подвала
 *
 * @param {string} vk - ссылка на vk
 * @param {string} zen - ссылка на zen
 * @param {string} ok - ссылка на ok
 * @param {string} yt - ссылка на youtube
 * @param {Partner[]} partners - массив партнеров
 * @param {string} phone - номер телефона в подвале
 * @param {string} email - email в подвале
 * @param {FooterElement[]} items - массив блочных элементов с ссылками в подвале
 */
export type FooterSettings = {
	vk?: string;
	zen?: string;
	ok?: string;
	yt?: string;
	partners: Partner[];
	phone: string;
	email: string;
	items: FooterElement[];
};

/**
 * Подвал
 *
 * @param {string} name - название
 * @param {FooterTemplates} template - шаблон подвала
 * @param {number} id - уникальный id
 * @param {string} color - название
 * @param {string} title - заголовок
 * @param {string} description - описание
 * @param {FooterSettings} settings - настройки подвала
 */
export interface IFooter {
	name: string;
	template: FooterTemplates;
	id: number;
	color: string;
	title?: string;
	description?: string;
	settings: FooterSettings;
}
