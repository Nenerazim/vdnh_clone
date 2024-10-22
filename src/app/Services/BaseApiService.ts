import {HttpRequest} from '@app/Utils/HttpRequest';

export class BaseApiService {
	private readonly config = useRuntimeConfig();
	protected httpService = new HttpRequest(this.config.public.apiUrl);

	handleError(data?: unknown | null, error?: unknown | null) {
		if (error || !data) {
			throw createError({statusCode: 404});
		}
	}
}
