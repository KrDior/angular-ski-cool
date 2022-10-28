import { MenuItem } from '@core/models/menu-item.model';
import { RoutePath } from 'src/app/app-routing.module';

export const menuItemsConfig: MenuItem[] = [
	{
		label: 'Home',
		localizeField: 'Home',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.Home,
	},
	{
		label: 'About Us',
		localizeField: 'About Us',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.AboutUs,
	},
	{
		label: 'Private Lessons',
		localizeField: 'Private Lessons',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.PrivateLesson,
	},
	{
		label: 'Group Lesson',
		localizeField: 'Group Lesson',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.GroupLesson,
	},
	{
		label: 'Individual Recreation',
		localizeField: 'Individual Recreation',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.Recreation,
	},
	{
		label: 'Review',
		localizeField: 'Review',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.Reviews,
	},
	{
		label: 'Contact Us',
		localizeField: 'Contact Us',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.Contact,
	},
];
