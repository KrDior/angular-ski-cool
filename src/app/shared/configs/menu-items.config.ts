import { MenuItem } from '@core/models/menu-item.model';
import { RoutePath } from 'src/app/app-routing.module';

export const menuItemsConfig: MenuItem[] = [
	{
		label: 'Home',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.Home,
	},
	{
		label: 'About Us',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.AboutUs,
	},
	{
		label: 'Private Lessons',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.PrivateLesson,
	},
	{
		label: 'Group Lesson',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.GroupLesson,
	},
	{
		label: 'Individual Recreation',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.Recreation,
	},
	{
		label: 'Review',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.Reviews,
	},
	{
		label: 'Contact Us',
		visible: true,
		disabled: false,
		styleClass: 'item',
		routerLink: RoutePath.Contact,
	},
];
