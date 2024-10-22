import type {UiIconProps} from '@ui/widgets/Icon/types';

export type UiInputProps = {
	type?: 'text' | 'password' | 'tel' | 'email' | 'search' | 'hidden' | 'url';
	inputMode?: 'text' | 'search' | 'tel' | 'email' | 'numeric' | 'url';
	placeholder?: string;
	label?: string;
	icon?: UiIconProps['name'];
	focus?: boolean;
	error?: string;
	lowerCase?: boolean;
	onlyNum?: boolean;
	maxLength?: number;
	id?: string;
	disabled?: boolean;
	mask?: 'phone' | string;
	color?: 'primary' | 'secondary' | 'default' | 'none';
	customClass?: string;
};
