import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingType } from '@core/components/booking/booking.component';
import { NavigationService } from '@core/services/navigation.service';
import { MainCard } from '@shared/models/main-card.model';
import { RoutePath } from 'src/app/app-routing.module';
import { PopupDialogComponent, DialogType } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-photo-card',
	templateUrl: './photo-card.component.html',
	styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
	@Input()
	public cardConfig!: MainCard;

	constructor(public dialog: MatDialog, private navigationService: NavigationService, private router: Router) {}

	public onClickButton(): void {
		const action = this.cardConfig?.clickAction?.actionType;

		switch (action) {
			case 'popup':
				this.dialog.open(PopupDialogComponent, {
					data: {
						type: this.cardConfig.clickAction.type as DialogType,
					},
				});
				break;
			case 'navigate':
				this.navigationService.setCurrentBookingType(this.cardConfig?.clickAction?.type as BookingType);
				break;
			default:
				break;
		}

		if (this.cardConfig?.routerLink) {
			this.router.navigate([this.cardConfig?.routerLink]);
		}
	}

	public onClickPriceButton(): void {
		this.dialog.open(PopupDialogComponent, {
			data: {
				type: DialogType.PricePrivateLesson,
			},
		});
	}
}
