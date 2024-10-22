import {useRoute} from 'vue-router';

export default class UrlHelp {
	static getBreadcrumbs(path?: string) {
		if (!path) path = useRoute().path;

		return path.split('/').filter(Boolean);
	}
}
