import type {UiIconProps} from '@ui/widgets/Icon/types';

export type UiButtonProps = {
	id?: string;
	label?: string;
	tag?: keyof HTMLElementTagNameMap;
	icon?: UiIconProps['name'];
	color?: 'primary' | 'secondary' | 'default' | 'transparent' | 'none' | 'error';
	disabled?: boolean;
	full?: boolean;
	exact?: boolean;
	type?: 'button' | 'submit' | 'link';
	href?: string;
	target?: '_blank' | '_self';
	customClass?: string;
	rel?: string;
	size?: 'md' | 'sm' | 'lg';
};
