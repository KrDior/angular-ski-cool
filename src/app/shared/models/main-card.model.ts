export interface MainCard {
	header: string;
	title: string;
	description: string;
	button: string;
	imageLink: string;
	imageAlt: string;
	direction: string;
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
}

export interface CarouselConfig {
	message: string;
	title?: string;
	cards: CarouselCard[];
	button: string;
	type: 'feedback' | 'partner';
}
