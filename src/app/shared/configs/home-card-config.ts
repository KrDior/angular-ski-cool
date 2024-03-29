import { BookingType } from '@core/components/booking/booking.component';
import { MainCard } from '@shared/models/main-card.model';

export const homeCard_1_Config: MainCard = {
	header: 'private lessons',
	title: 'Our elite school provides excellent individual lessons',
	description:
		'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover.',
	button: 'Discover more',
	imageLink: 'assets/img/home/about-us-1.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row-reverse',
	routerLink: 'private-lesson',
};

export const homeCard_2_Config: MainCard = {
	header: 'group lessons',
	title: 'Our elite school provides excellent group lessons',
	description:
		'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets.',
	button: 'Discover more',
	imageLink: 'assets/img/home/about-us-2.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row',
	routerLink: 'private-lesson',
};

export const homeCard_3_Config: MainCard = {
	header: 'about us',
	title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
	description:
		'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
	button: 'Discover more',
	imageLink: 'assets/img/home/about-us-3.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row-reverse',
	routerLink: 'group-lesson',
};

export const aboutUsCard_1_Config: MainCard = {
	title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
	description:
		'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
	button: 'Our Team',
	imageLink: 'assets/img/home/about-us-3.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row-reverse',
	routerLink: '/our-team',
};

export const ourTeamCard_1_Config: MainCard = {
	header: 'our team',
	title: 'Would you like to be a part of our team?',
	description:
		'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
	button: 'Join Us',
	imageLink: 'assets/img/team/photo.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row',
	routerLink: '',
	clickAction: {
		actionType: 'popup',
		type: 'Contact',
	},
};

export const privateLesson_Config: MainCard[] = [
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		price: 'View the price list',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.PrivateLesson,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		price: 'View the price list',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.PrivateLesson,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		price: 'View the price list',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.PrivateLesson,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		price: 'View the price list',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.PrivateLesson,
		},
	},
];

export const recreation_Config: MainCard[] = [
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		priceText: 'Price:  250 CHF per person',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.IndividualRecreation,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		priceText:
			'Price:  sleigh for 4 people – 1 hr trip – 110 CHF; 160 CHF – return trip to the valleys (including 1 hr stay)',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.IndividualRecreation,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		priceText: 'Price:  250 CHF per person',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.IndividualRecreation,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		priceText:
			'Price:  sleigh for 4 people – 1 hr trip – 110 CHF; 160 CHF – return trip to the valleys (including 1 hr stay)',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.IndividualRecreation,
		},
	},
];

export const groupLesson_Config: MainCard[] = [
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		price: 'View the price list',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.GroupLesson,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		price: 'View the price list',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.GroupLesson,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		price: 'View the price list',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.GroupLesson,
		},
	},
	{
		title: 'Ski Cool St. Moritz, is an elite snowsports school of the Engadin Valley, Switzerland',
		description:
			'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain: Corviglia, Corvatsch, Lagalb-Diavolezza or Zuoz.',
		button: 'Book now',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		price: 'View the price list',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.GroupLesson,
		},
	},
];
