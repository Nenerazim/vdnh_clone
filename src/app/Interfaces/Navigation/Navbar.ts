/**
 * Элемент ссылки навигационной панели
 *
 * @param {boolean} is_promo - идентификатор, явялется ли элемент шапки промо-материалом
 * @param {string} name - заголовок элемента шапки
 * @param {string} href - ссылка
 * @param {string} key - уникальный идентификатор
 * @param {string} color - цвет
 */
export type NavbarLink = {
	is_promo: boolean;
	name: string;
	href: string;
	key: string;
	color: string;
};
