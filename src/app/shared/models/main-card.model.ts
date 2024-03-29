import { RoutePath } from 'src/app/app-routing.module';

export interface MainCard {
	header?: string;
	title: string;
	description: string;
	button: string;
	imageLink: string;
	imageAlt: string;
	direction: string;
	routerLink?: string | RoutePath;
	clickAction?: any;
	price?: string;
	priceText?: string;
}

export interface AdvantageSlide {
	header: string;
	title: string;
	imageLink: string;
	imageAlt: string;
}

export interface CarouselCard {
	date?: string;
	name: string;
	text?: string;
	imageLink: string;
	imageAlt?: string;
	navigateLink?: string;
}

export interface CarouselConfig {
	message: string;
	title?: string;
	cards: CarouselCard[];
	button?: string;
	routerLink?: string | RoutePath;
	type: 'feedback' | 'partner';
	fullTitleWidth?: boolean;
	isScrollable: boolean;
}

export interface IconNavConfig {
	title: string;
	imageLink: string;
	routerLink: string | RoutePath;
	imageAlt: string;
	clickAction?: any;
}
