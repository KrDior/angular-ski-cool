import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { advantageHomeMessage, homeAdvantageSlideConfig } from '@shared/configs/advantage-slide.config';
import { homePageArticleCenter } from '@shared/configs/article-center.config';
import { homeCarouselConfig } from '@shared/configs/carousel.config';
import { homeCard_1_Config, homeCard_2_Config, homeCard_3_Config } from '@shared/configs/home-card-config';
import { iconNavHomeConfig } from '@shared/configs/icon-nav.config';
import { AdvantageSlide, CarouselConfig, IconNavConfig, MainCard } from '@shared/models/main-card.model';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
	public cardConfig1!: MainCard;
	public cardConfig2!: MainCard;
	public cardConfig3!: MainCard;
	public articleCenterConfig!: MainCard;
	public advantageSlideConfig!: AdvantageSlide[];
	public advantageHomeMessage!: string;
	public carouselConfig!: CarouselConfig;
	public iconNavConfig!: IconNavConfig[];

	@HostListener('window:scroll', []) onWindowScroll() {
		const elemStyle = this.fixBar!.nativeElement.style;
		const topPoint = document.body.clientWidth < 1000 ? 1300 : 1000;
		const bottomPoint = document.body.clientWidth < 1000 ? 6300 : 5200;

		elemStyle.visibility = window.pageYOffset < topPoint || window.pageYOffset > bottomPoint ? 'hidden' : 'visible';
	}

	@ViewChild('fixBar')
	public fixBar!: ElementRef;

	constructor() {
		this.cardConfig1 = homeCard_1_Config;
		this.cardConfig2 = homeCard_2_Config;
		this.cardConfig3 = homeCard_3_Config;
		this.articleCenterConfig = homePageArticleCenter;
		this.advantageSlideConfig = homeAdvantageSlideConfig;
		this.advantageHomeMessage = advantageHomeMessage;
		this.carouselConfig = homeCarouselConfig;
		this.iconNavConfig = iconNavHomeConfig;
	}
}
