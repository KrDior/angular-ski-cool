import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainCard } from '@shared/models/main-card.model';
import { PopupDialogComponent, DialogType } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-article-center',
	templateUrl: './article-center.component.html',
	styleUrls: ['./article-center.component.scss'],
})
export class ArticleCenterComponent {
	@Input()
	public articleConfig!: MainCard;

	constructor(public dialog: MatDialog) {}

	public onClickButton(): void {
		if (this.articleConfig?.clickAction?.actionType === 'popup') {
			this.dialog.open(PopupDialogComponent, {
				data: {
					type: this.articleConfig.clickAction.type as DialogType,
				},
			});
		}
	}
}
