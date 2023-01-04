import { MainCard } from '@shared/models/main-card.model';

export const homePageArticleCenter: MainCard = {
	header: 'HomePageArticleCenter.Header',
	title: 'HomePageArticleCenter.Title',
	description: 'HomePageArticleCenter.Description',
	button: 'DiscoverMore',
	imageLink: '/assets/img/home/recreation.png',
	imageAlt: 'background-photo',
	routerLink: 'recreation',
	direction: '',
};

export const reviewPageArticleCenter: MainCard = {
	header: '',
	title: 'ReviewPageArticleCenter.Title',
	description: 'ReviewPageArticleCenter.Description',
	button: 'ReviewPageArticleCenter.Button',
	imageLink: '/assets/img/home/recreation.png',
	imageAlt: 'background-photo',
	direction: '',
	clickAction: {
		actionType: 'popup',
		type: 'Feedback',
	},
};
