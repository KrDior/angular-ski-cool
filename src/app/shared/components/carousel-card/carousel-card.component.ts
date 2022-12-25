import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarouselCard, CarouselConfig } from '@shared/models/main-card.model';
import { RoutePath } from 'src/app/app-routing.module';
import { PopupDialogComponent, DialogType } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-carousel-card',
	templateUrl: './carousel-card.component.html',
	styleUrls: ['./carousel-card.component.scss'],
})
export class CarouselCardComponent {
	@Input()
	public carouselConfig!: CarouselConfig;

	public routes: typeof RoutePath = RoutePath;

	constructor(public dialog: MatDialog) {}

	public showFeedback(card: CarouselCard): void {
		this.dialog.open(PopupDialogComponent, {
			data: {
				name: card.name,
				title: '',
				description: card.text,
				type: DialogType.FeedbackMore,
			},
		});
	}
}
