import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonCard } from '@shared/configs/person-card.config';
import { DialogType, PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-person-photo-card',
	templateUrl: './person-photo-card.component.html',
	styleUrls: ['./person-photo-card.component.scss'],
})
export class PersonPhotoCardComponent {
	@Input()
	public cardConfig!: PersonCard;

	constructor(public dialog: MatDialog) {}

	public onClickButton(): void {
		this.dialog.open(PopupDialogComponent, {
			data: {
				name: this.cardConfig.title,
				title: this.cardConfig.subtitle,
				description: this.cardConfig.text,
				type: DialogType.Person,
			},
		});
	}
}
