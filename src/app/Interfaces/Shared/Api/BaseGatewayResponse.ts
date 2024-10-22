/**
 * Стандартизованный ответ от шлюза
 * @param {unknown[]} pagination - пагинация (че внутри не ясно)
 * @param {unknown} data - данные прилетающие с запросы
 * @param {boolean} success - успешность запроса
 */
export interface BaseGatewayResponse<T> {
	pagination?: unknown[];
	data: T;
	success: boolean;
}
