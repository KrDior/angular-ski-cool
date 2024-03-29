import { Component } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { reviewPageArticleCenter } from '@shared/configs/article-center.config';
import { reviewCarouselConfig } from '@shared/configs/carousel.config';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { DEFAULT_BACKGROUND_PATH } from '@shared/constants/images-constants';
import { CarouselConfig, MainCard } from '@shared/models/main-card.model';
import { BottomContext } from '../nav-slider/nav-slider.component';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
	public articleCenterConfig!: MainCard;
	public carouselConfig!: CarouselConfig;

	constructor(private broadcaster: BroadcasterService) {
		this.articleCenterConfig = reviewPageArticleCenter;
		this.carouselConfig = reviewCarouselConfig;

		this.broadcaster.broadcast(BroadcastConstant.BottomContextPage, {
			path: BottomContext.Review,
			imagePath: DEFAULT_BACKGROUND_PATH,
		});
	}
}
