import { MainCard } from '@shared/models/main-card.model';

export const homePageArticleCenter: MainCard = {
	header: 'Individual recreation',
	title: 'Ski Cool St. Moritz, is an elite snowsports school',
	description:
		'Our team has great expertise of the Engadin valley: we spent the last 9 years learning all the secrets of the resort, and we are ready to guide our guests to discover the four main areas of the skiable domain.',
	button: 'Discover more',
	imageLink: '/assets/img/home/recreation.png',
	imageAlt: 'background-photo',
	direction: '',
};

export const reviewPageArticleCenter: MainCard = {
	header: '',
	title: 'We want to always be in good shape',
	description:
		"If you have already booked the service, please fill out the form and leave your feedback. If you haven't booked the service yet, then unfortunately you won't be able to leave a review.",
	button: 'Leave a review',
	imageLink: '/assets/img/home/recreation.png',
	imageAlt: 'background-photo',
	direction: '',
	clickAction: {
		actionType: 'popup',
		type: 'Feedback',
	},
};
