import { IconNavConfig } from '@shared/models/main-card.model';
import { RoutePath } from 'src/app/app-routing.module';

export const iconNavHomeConfig: IconNavConfig[] = [
	{
		title: 'Weather',
		routerLink: RoutePath.Home,
		imageLink: 'assets/svg/home/weather.svg',
		imageAlt: 'weather',
	},
	{
		title: 'Slopes & Facilities',
		routerLink: RoutePath.Home,
		imageLink: 'assets/svg/home/slope.svg',
		imageAlt: 'slope',
	},
	{
		title: 'Livecams',
		routerLink: RoutePath.Home,
		imageLink: 'assets/svg/home/camera.svg',
		imageAlt: 'camera',
	},
	{
		title: 'Map',
		routerLink: RoutePath.Home,
		imageLink: 'assets/svg/home/maps.svg',
		imageAlt: 'maps',
	},
];
