import { MenuItem } from '@core/models/menu-item.model';
import { RoutePath } from 'src/app/app-routing.module';

export const menuItemsConfig: MenuItem[] = [
	{
		label: 'About Us',
		localizeField: 'About Us',
		visible: true,
		disabled: false,
		styleClass: 'mat-display-1',
		routerLink: RoutePath.AboutUs,
	},
	{
		label: 'Private Lessons',
		localizeField: 'Private Lessons',
		visible: true,
		disabled: false,
		styleClass: 'mat-display-1',
		routerLink: RoutePath.PrivateLesson,
	},
	{
		label: 'Group Lesson',
		localizeField: 'Group Lesson',
		visible: true,
		disabled: false,
		styleClass: 'mat-display-1',
		routerLink: RoutePath.GroupLesson,
	},
	{
		label: 'Individual Recreation',
		localizeField: 'Individual Recreation',
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
