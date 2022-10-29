import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { homePageArticleCenter } from '@shared/configs/article-center.config';
import { homeCardConfig } from '@shared/configs/home-card-config';
import { MainCard } from '@shared/models/main-card.model';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
	public cardConfig!: MainCard[];
	public articleCenterConfig!: MainCard;

	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
		this.cardConfig = homeCardConfig;
		this.articleCenterConfig = homePageArticleCenter;

		this.iconRegistry.addSvgIcon('video', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/video.svg'));
	}
}
