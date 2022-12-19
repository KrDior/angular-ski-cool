import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutePath } from 'src/app/app-routing.module';
import { DialogType, PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-contact-block',
	templateUrl: './contact-block.component.html',
	styleUrls: ['./contact-block.component.scss'],
})
export class ContactBlockComponent {
	public routes: typeof RoutePath = RoutePath;

	constructor(public dialog: MatDialog) {}

	public showContactPopup(): void {
		this.dialog.open(PopupDialogComponent, {
			data: {
				name: '',
				title: '',
				description: '',
				type: DialogType.Contact,
			},
		});
	}
}
