import type {ComponentList} from './Components';

export type PageMetaData = {
	title: string;
	description: string;
};

/**
 * Страница прилетающая с апи
 *
 * @param {string} name - название страницы
 * @param {string} color - дефолтный цвет для страницы
 * @param {PageMetaData} meta_data - мета-данные
 * @param {ComponentList[]} components - Список компонентов используемых страницей
 */

export interface IPage {
	name: string;
	color: string;
	meta_data: PageMetaData;
	components: ComponentList[];
}
