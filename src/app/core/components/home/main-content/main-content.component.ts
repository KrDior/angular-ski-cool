import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { advantageHomeMessage, homeAdvantageSlideConfig } from '@shared/configs/advantage-slide.config';
import { homePageArticleCenter } from '@shared/configs/article-center.config';
import { homeCardConfig } from '@shared/configs/home-card-config';
import { AdvantageSlide, MainCard } from '@shared/models/main-card.model';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
	public cardConfig!: MainCard[];
	public articleCenterConfig!: MainCard;
	public advantageSlideConfig!: AdvantageSlide[];
	public advantageHomeMessage!: string;

	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
		this.cardConfig = homeCardConfig;
		this.articleCenterConfig = homePageArticleCenter;
		this.advantageSlideConfig = homeAdvantageSlideConfig;
		this.advantageHomeMessage = advantageHomeMessage;

		this.iconRegistry.addSvgIcon('video', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/video.svg'));
	}
}
