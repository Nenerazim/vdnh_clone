import {PhonePattern} from './patterns/phone';
import {DefaultPattern} from './patterns/default';

export class MaskInput {
	private _pattern;

	constructor(input: HTMLInputElement, mask: string) {
		switch (mask) {
			case 'phone':
				this._pattern = new PhonePattern(input);
				break;
			default:
				this._pattern = new DefaultPattern(input);
		}
	}

	public init() {
		this._pattern.init();
	}

	public destroy() {
		this._pattern.destroy();
	}
}
