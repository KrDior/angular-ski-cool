import { MenuItem } from '@core/models/menu-item.model';
import { RoutePath } from 'src/app/app-routing.module';

export const menuItemsConfig: MenuItem[] = [
	{
		label: 'About Us',
		localizeField: 'Menu.AboutUs',
		visible: true,
		disabled: false,
		styleClass: 'mat-display-1',
		routerLink: RoutePath.AboutUs,
	},
	{
		label: 'Private Lessons',
		localizeField: 'Menu.PrivateLessons',
		visible: true,
		disabled: false,
		styleClass: 'mat-display-1',
		routerLink: RoutePath.PrivateLesson,
	},
	{
		label: 'Group Lesson',
		localizeField: 'Menu.GroupLesson',
		visible: true,
		disabled: false,
		styleClass: 'mat-display-1',
		routerLink: RoutePath.GroupLesson,
	},
	{
		label: 'Individual Recreation',
		localizeField: 'Menu.IndividualRecreation',
		visible: true,
		disabled: false,
		styleClass: 'mat-display-1',
		routerLink: RoutePath.Recreation,
	},
	{
		label: 'Review',
		localizeField: 'Review',
		visible: true,
		disabled: false,
		styleClass: 'mat-display-1',
		routerLink: RoutePath.Reviews,
	},
];
