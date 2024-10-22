/**
 * Настройки слайда/картинки
 *
 * @param {string} img_url - сслыка на картинку
 * @param {string} title - Заголовок слайда/картинки
 */
export interface RoutesPreviewItems {
	img_url: string;
	title: string;
}
/**
 * настройки для кмпонента
 *
 * @param {string} btn - Имя кнопки
 * @param {string} href - сслыка в кнопке
 * @param {string} description - описание компонента
 * @param { RoutesPreviewItems[]} items - Если летит 1 обьект будет картинка, иначе слайдер
 */
export interface IRoutesPreview {
	title: string;
	id: number;
	btn?: string;
	href?: string;
	description: string;
	name: 'RoutesPreview';
	items: RoutesPreviewItems[];
}
/**
 * Координаты места для карты
 *
 * @param {[number, number]} position - x y координаты
 */
export interface Position {
	position: [number, number];
}
/**
 * настройки слайда мест
 *
 * @param {string} img_url - картинка места
 * @param {string} type - тип места (вход, алеея и тд)
 * @param {string} name - название места
 */
export interface RoutesBuildingItems {
	img_url: string;
	type: string;
	name: string;
}
/**
 * Позволяет пользователю достроить текущий маршрут
 *
 * @param {string} name - название места
 * @param {'entrance' | 'checkpoint'} type - тип иконки entrance- вход/выход, checkpoint- КПП
 * @param {RoutesBuildingItems} item - при клике на это место item добавляется в слайдер
 * @param {string} img_url - картинка места
 * @param {string} type - тип места (вход, алеея и тд)
 */
export interface RoutesBuildingPlace {
	name: string;
	icon: 'entrance' | 'checkpoint';
	img_url: string;
	type: string;
}
/**
 * Настройки компонента RoutesBuilding
 *
 * @param {string} name - константа, позволяет динамически импортировать этот комопнент
 * @param {RoutesBuildingItems[]} items - массив с местами текущего маршрута
 * @param {RoutesBuildingPlace[]} item - массив с местами возможного старта, позволит дополнить текущий маршрут
 * @param {Position[]} current_position - массив с координатами выбраных мест
 * @param {Position[]} free_position - массив с координатами доступных мест
 */
export interface IRoutesBuilding {
	title: string;
	id: number;
	name: 'RoutesBuilding';
	items: RoutesBuildingItems[];
	place: RoutesBuildingPlace[];
	current_position: Position[];
	free_position: Position[];
}
