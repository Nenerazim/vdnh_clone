declare module 'nuxt/schema' {
	interface RuntimeConfig {
		apiUrl: string;
		devApiUrl: string;
		appUrl: string;
		isDev: boolean;
	}
	interface PublicRuntimeConfig {
		apiUrl: string;
		devApiUrl: string;
		appUrl: string;
		isDev: boolean;
	}
}

export {};
