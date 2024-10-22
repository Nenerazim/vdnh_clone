type WindowWithClipboard = Window & typeof globalThis & {clipboardData: DataTransfer | null | undefined};

export class PhonePattern {
	private _inputElement;

	constructor(input: HTMLInputElement) {
		this._inputElement = input;
	}

	public init() {
		this._inputElement.addEventListener('paste', this.onPaste);
		this._inputElement.addEventListener('keydown', this.onKeyDown);
		this._inputElement.addEventListener('input', this.onInput);
	}

	public destroy() {
		this._inputElement.removeEventListener('paste', this.onPaste);
		this._inputElement.removeEventListener('keydown', this.onKeyDown);
		this._inputElement.removeEventListener('input', this.onInput);
	}

	private onPaste(e: ClipboardEvent) {
		const input = e.target as HTMLInputElement;
		const pasted = (e.target as ClipboardEventInit).clipboardData || (window as WindowWithClipboard).clipboardData;
		if (pasted) {
			const pastedText = pasted.getData('Text');
			if (/\D/g.test(pastedText)) {
				input.value = input.value.replace(/\D/g, '');
			}
		}
	}

	private onKeyDown(e: KeyboardEvent) {
		const input = e.target as HTMLInputElement;
		const inputValue = input.value.replace(/\D/g, '');
		if (e.code === '8' && inputValue.length === 1) {
			input.value = '';
		}
	}

	private onInput(e: Event) {
		const event = e as Event & InputEvent;
		const input = event.target as HTMLInputElement;
		const selectionStart = input.selectionStart;
		let numericValue = input.value.replace(/\D/g, '');
		let formattedValue = '';

		if (!numericValue) {
			return (input.value = '');
		}

		if (input.value.length !== selectionStart) {
			if (event.data && /\D/g.test(event.data)) {
				input.value = numericValue;
			}
			return;
		}

		if (['7', '8', '9'].includes(numericValue[0])) {
			if (numericValue[0] === '9') {
				numericValue = '7' + numericValue;
			}
			const firstSymbols = numericValue[0] === '8' ? '8' : '+7';
			formattedValue = input.value = firstSymbols + ' ';

			if (numericValue.length > 1) {
				formattedValue += '(' + numericValue.substring(1, 4);
			}
			if (numericValue.length >= 5) {
				formattedValue += ') ' + numericValue.substring(4, 7);
			}
			if (numericValue.length >= 8) {
				formattedValue += '-' + numericValue.substring(7, 9);
			}
			if (numericValue.length >= 10) {
				formattedValue += '-' + numericValue.substring(9, 11);
			}
		} else {
			formattedValue = '+' + numericValue.substring(0, 16);
		}
		input.value = formattedValue;
	}
}
