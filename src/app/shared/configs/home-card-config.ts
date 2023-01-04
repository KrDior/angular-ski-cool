import { BookingType } from '@core/components/booking/booking.component';
import { MainCard } from '@shared/models/main-card.model';

export const homeCard_1_Config: MainCard = {
	header: 'HomeCard_1_Config.Header',
	title: 'HomeCard_1_Config.Title',
	description: 'HomeCard_1_Config.Description',
	button: 'DiscoverMore',
	imageLink: 'assets/img/home/about-us-1.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row-reverse',
	routerLink: 'private-lesson',
};

export const homeCard_2_Config: MainCard = {
	header: 'HomeCard_2_Config.Header',
	title: 'HomeCard_2_Config.Title',
	description: 'HomeCard_2_Config.Description',
	button: 'DiscoverMore',
	imageLink: 'assets/img/home/about-us-2.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row',
	routerLink: 'private-lesson',
};

export const homeCard_3_Config: MainCard = {
	header: 'HomeCard_3_Config.Header',
	title: 'HomeCard_3_Config.Title',
	description: 'HomeCard_3_Config.Description',
	button: 'DiscoverMore',
	imageLink: 'assets/img/home/about-us-3.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row-reverse',
	routerLink: 'group-lesson',
};

export const aboutUsCard_1_Config: MainCard = {
	title: 'AboutUsCard_1_Config.Title',
	description: 'AboutUsCard_1_Config.Description',
	button: 'AboutUsCard_1_Config.Button',
	imageLink: 'assets/img/home/about-us-3.png',
	imageAlt: 'photo',
	direction: 'flex-direction: row-reverse',
	routerLink: '/our-team',
};

export const ourTeamCard_1_Config: MainCard = {
	header: 'OurTeamCard_1_Config.Header',
	title: 'OurTeamCard_1_Config.Title',
	description: 'OurTeamCard_1_Config.Description',
	button: 'OurTeamCard_1_Config.Button',
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
		title: 'PrivateLesson_Config.Card1.Title',
		description: 'PrivateLesson_Config.Card1.Description',
		button: 'PrivateLesson_Config.Card1.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		price: 'ViewPrice',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.PrivateLesson,
		},
	},
	{
		title: 'PrivateLesson_Config.Card2.Title',
		description: 'PrivateLesson_Config.Card2.Description',
		button: 'PrivateLesson_Config.Card2.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		price: 'ViewPrice',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.PrivateLesson,
		},
	},
	{
		title: 'PrivateLesson_Config.Card3.Title',
		description: 'PrivateLesson_Config.Card3.Description',
		button: 'PrivateLesson_Config.Card3.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		price: 'ViewPrice',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.PrivateLesson,
		},
	},
	{
		title: 'PrivateLesson_Config.Card4.Title',
		description: 'PrivateLesson_Config.Card4.Description',
		button: 'PrivateLesson_Config.Card4.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		price: 'ViewPrice',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.PrivateLesson,
		},
	},
];

export const recreation_Config: MainCard[] = [
	{
		title: 'Recreation_Config.Card1.Title',
		description: 'Recreation_Config.Card1.Description',
		button: 'Recreation_Config.Card1.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		priceText: '250 CHF per person',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.IndividualRecreation,
		},
	},
	{
		title: 'Recreation_Config.Card2.Title',
		description: 'Recreation_Config.Card2.Description',
		button: 'Recreation_Config.Card2.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		priceText: 'sleigh for 4 people – 1 hr trip – 110 CHF; 160 CHF – return trip to the valleys (including 1 hr stay)',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.IndividualRecreation,
		},
	},
	{
		title: 'Recreation_Config.Card3.Title',
		description: 'Recreation_Config.Card3.Description',
		button: 'Recreation_Config.Card3.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		priceText: '250 CHF per person',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.IndividualRecreation,
		},
	},
	{
		title: 'Recreation_Config.Card4.Title',
		description: 'Recreation_Config.Card4.Description',
		button: 'Recreation_Config.Card4.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		priceText: 'sleigh for 4 people – 1 hr trip – 110 CHF; 160 CHF – return trip to the valleys (including 1 hr stay)',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.IndividualRecreation,
		},
	},
];

export const groupLesson_Config: MainCard[] = [
	{
		title: 'GroupLesson_Config.Card1.Title',
		description: 'GroupLesson_Config.Card1.Description',
		button: 'GroupLesson_Config.Card1.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		price: 'ViewPrice',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.GroupLesson,
		},
	},
	{
		title: 'GroupLesson_Config.Card2.Title',
		description: 'GroupLesson_Config.Card2.Description',
		button: 'GroupLesson_Config.Card2.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		price: 'ViewPrice',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.GroupLesson,
		},
	},
	{
		title: 'GroupLesson_Config.Card3.Title',
		description: 'GroupLesson_Config.Card3.Description',
		button: 'GroupLesson_Config.Card3.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row',
		routerLink: '/booking',
		price: 'ViewPrice',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.GroupLesson,
		},
	},
	{
		title: 'GroupLesson_Config.Card4.Title',
		description: 'GroupLesson_Config.Card4.Description',
		button: 'GroupLesson_Config.Card4.Button',
		imageLink: 'assets/img/home/about-us-3.png',
		imageAlt: 'photo',
		direction: 'flex-direction: row-reverse',
		routerLink: '/booking',
		price: 'ViewPrice',
		clickAction: {
			actionType: 'navigate',
			type: BookingType.GroupLesson,
		},
	},
];
