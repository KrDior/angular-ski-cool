export interface MenuItem {
	label: string;
	icon?: string;
	command?: (event?: any) => void;
	url?: string;
	routerLink?: any;
	queryParams?: { [k: string]: any };
	items?: MenuItem[];
	expanded?: boolean;
	disabled?: boolean;
	visible?: boolean;
	target?: string;
	routerLinkActiveOptions?: any;
	separator?: boolean;
	badge?: string;
	badgeStyleClass?: string;
	style?: any;
	styleClass?: string;
	title?: string;
	id?: string;
	matMenuItem?: boolean;
}

type Modify<T, R> = Omit<T, keyof R> & R;
export interface MenuItemMore extends Modify<MenuItem, { label?: string }> {}
