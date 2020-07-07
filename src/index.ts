import * as path from 'path';

interface PluginInfo {
	readonly id: string;
	readonly name: string;
	readonly description: string | null;
	readonly version: string;
	readonly author: string;
}

abstract class Plugin {
	public readonly id: string;
	public readonly name: string;
	public readonly description: string | null;
	public readonly version: string;
	public readonly author: string;

	public api: {};

	public constructor(info: PluginInfo) {
		const {
			id, name, description,
			version, author
		} = info;

		this.id = id;
		this.name = name;
		this.description = description;
		this.version = version;
		this.author = author;

		this.api = {};
	}

	public abstract async load(): Promise<void>;
	public abstract async start(): Promise<void>;
}

type Nullable<T> = T | null;

export default class extends Plugin {
	public constructor() {
		super({
			id: 'materialize',
			name: 'Materialize',
			description: null,
			version: '1.0.0',
			author: 'Assasans'
		});
	}

	public async load(): Promise<void> {
		const $ = await import('jquery');

		$('head').append($(`<link href="${path.join(__dirname, '..', 'css/common.css')}" rel="stylesheet">`));
		$('head').append($(`<link href="${path.join(__dirname, '..', 'css/auth.css')}" rel="stylesheet">`));
		$('head').append($(`<link href="${path.join(__dirname, '..', 'css/main-menu.css')}" rel="stylesheet">`));
		$('head').append($(`<link href="${path.join(__dirname, '..', 'css/battles.css')}" rel="stylesheet">`));
		$('head').append($(`<link href="${path.join(__dirname, '..', 'css/clan.css')}" rel="stylesheet">`));
		$('head').append($(`<link href="${path.join(__dirname, '..', 'css/missions.css')}" rel="stylesheet">`));
		$('head').append($(`<link href="${path.join(__dirname, '..', 'css/shop.css')}" rel="stylesheet">`));
		$('head').append($(`<link href="${path.join(__dirname, '..', 'css/garage.css')}" rel="stylesheet">`));
	}

	public async start(): Promise<void> {
		
	}
}
