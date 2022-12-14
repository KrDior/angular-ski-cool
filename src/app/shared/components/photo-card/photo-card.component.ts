import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainCard } from '@shared/models/main-card.model';
import { PopupDialogComponent, DialogType } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-photo-card',
	templateUrl: './photo-card.component.html',
	styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
	@Input()
	public cardConfig!: MainCard;

	constructor(public dialog: MatDialog) {}

	public onClickButton(): void {
		if (this.cardConfig?.clickAction?.actionType === 'popup') {
			this.dialog.open(PopupDialogComponent, {
				data: {
					type: this.cardConfig.clickAction.type as DialogType,
				},
			});
		}
	}

	public onClickPriceButton(): void {
		this.dialog.open(PopupDialogComponent, {});
	}
}
