import { IconNavConfig } from '@shared/models/main-card.model';
import { RoutePath } from 'src/app/app-routing.module';

export const iconNavHomeConfig: IconNavConfig[] = [
	{
		title: 'IconNavHomeConfig.Weather',
		routerLink: RoutePath.Home,
		imageLink: 'assets/svg/home/weather.svg',
		imageAlt: 'weather',
	},
	{
		title: 'IconNavHomeConfig.SlopesFacilities',
		routerLink: RoutePath.Home,
		imageLink: 'assets/svg/home/slope.svg',
		imageAlt: 'slope',
	},
	{
		title: 'IconNavHomeConfig.Livecams',
		routerLink: RoutePath.Home,
		imageLink: 'assets/svg/home/camera.svg',
		imageAlt: 'camera',
	},
	{
		title: 'IconNavHomeConfig.ContactUs',
		routerLink: '',
		imageLink: 'assets/svg/contact.svg',
		imageAlt: 'contact',
		clickAction: {
			actionType: 'popup',
			type: 'Contact',
		},
	},
	{
		title: 'IconNavHomeConfig.Map',
		routerLink: RoutePath.Home,
		imageLink: 'assets/svg/home/maps.svg',
		imageAlt: 'maps',
	},
];
