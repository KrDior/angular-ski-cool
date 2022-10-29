import { MainCard } from '@shared/models/main-card.model';

export const homeCardConfig: MainCard[] = [
	{
		header: 'About Us',
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Discover more',
		imageLink: '/assets/img/card-default.jpg',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
	},
	{
		header: 'Private lessons',
		title: 'Our elite school provides excellent individual lessons',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover.',
		button: 'Discover more',
		imageLink: '/assets/img/card-default.jpg',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
	},
	{
		header: 'Private lessons',
		title: 'Our elite school provides excellent group lessons',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets.',
		button: 'Discover more',
		imageLink: '/assets/img/card-default.jpg',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
	},
];
