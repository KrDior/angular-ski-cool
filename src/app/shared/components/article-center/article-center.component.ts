import { Component, Input } from '@angular/core';
import { MainCard } from '@shared/models/main-card.model';

@Component({
	selector: 'app-article-center',
	templateUrl: './article-center.component.html',
	styleUrls: ['./article-center.component.scss'],
})
export class ArticleCenterComponent {
	@Input()
	public articleConfig!: MainCard;

	constructor() {}
}
