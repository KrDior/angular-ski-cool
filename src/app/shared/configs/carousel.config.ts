import { CarouselCard, CarouselConfig } from '@shared/models/main-card.model';

export const feedbacks: CarouselCard[] = [
	{
		date: '20 december, 2021',
		name: 'Claire N.',
		text: 'Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie. Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie.',
		imageLink: 'assets/img/noavatar-profile.png',
		imageAlt: 'feedback name',
	},
	{
		date: '20 december, 2021',
		name: 'Claire N.',
		text: 'Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie.',
		imageLink: 'assets/img/noavatar-profile.png',
		imageAlt: 'feedback name',
	},
	{
		date: '20 december, 2021',
		name: 'Claire N.',
		text: 'Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie.',
		imageLink: 'assets/img/noavatar-profile.png',
		imageAlt: 'feedback name',
	},
	{
		date: '20 december, 2021',
		name: 'Claire N.',
		text: 'Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie.',
		imageLink: 'assets/img/noavatar-profile.png',
		imageAlt: 'feedback name',
	},
	{
		date: '20 december, 2021',
		name: 'Claire N.',
		text: 'Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie.',
		imageLink: 'assets/img/noavatar-profile.png',
		imageAlt: 'feedback name',
	},
	{
		date: '20 december, 2021',
		name: 'Claire N.',
		text: 'Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie.',
		imageLink: 'assets/img/noavatar-profile.png',
		imageAlt: 'feedback name',
	},
	{
		date: '20 december, 2021',
		name: 'Claire N.',
		text: 'Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie.',
		imageLink: 'assets/img/noavatar-profile.png',
		imageAlt: 'feedback name',
	},
	{
		date: '20 december, 2021',
		name: 'Claire N.',
		text: 'Vittorio, we all had a wonderful time on Sunday. Pete did the marathon in under 3 hours, Mark did it in about 3.30 hours as did Leslie.',
		imageLink: 'assets/img/noavatar-profile.png',
		imageAlt: 'feedback name',
	},
];

export const homeCarouselConfig: CarouselConfig = {
	message: 'our reviews',
	type: 'feedback',
	title: 'You can also read reviews about our school',
	cards: feedbacks,
	button: 'Discover more',
	routerLink: '/review',
};

export const reviewCarouselConfig: CarouselConfig = {
	message: '',
	type: 'feedback',
	title: 'You can also read reviews about our school',
	cards: feedbacks,
	button: 'Discover more',
};

export const homeCarouselPartnerConfig: CarouselConfig = {
	message: 'our partners',
	type: 'partner',
	fullTitleWidth: true,
	cards: [
		{
			name: 'Name partner',
			imageLink: 'assets/svg/home/partner1.svg',
			imageAlt: 'partner logo',
			navigateLink: '',
		},
		{
			name: 'Name partner',
			imageLink: 'assets/svg/home/partner2.svg',
			imageAlt: 'partner logo',
			navigateLink: '',
		},
		{
			name: 'Name partner',
			imageLink: 'assets/svg/home/partner3.svg',
			imageAlt: 'partner logo',
			navigateLink: '',
		},
		{
			name: 'Name partner',
			imageLink: 'assets/svg/home/partner4.svg',
			imageAlt: 'partner logo',
			navigateLink: '',
		},
	],
};
