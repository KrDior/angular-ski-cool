import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LanguageList, ResortList } from '@shared/configs/form.config';
import { RoutePath } from 'src/app/app-routing.module';
import { DialogType, PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-recreation-booking-form',
	templateUrl: './recreation-booking-form.component.html',
	styleUrls: ['./recreation-booking-form.component.scss'],
})
export class RecreationBookingFormComponent implements OnInit {
	public routes: typeof RoutePath = RoutePath;
	public recreationBookingForm!: FormGroup;
	public languages = LanguageList;
	public resorts = ResortList;

	constructor(public dialog: MatDialog) {}

	ngOnInit() {
		this.recreationBookingForm = new FormGroup({
			firstName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			lastName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			email: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			phoneNumber: new FormControl('', [Validators.required]),
			language: new FormControl('', [Validators.required]),
			resort: new FormControl('', [Validators.required]),
			startDate: new FormControl('', [Validators.required]),
			endDate: new FormControl('', [Validators.required]),
		});
	}

	public checkError = (controlName: string, errorName: string) => {
		return this.recreationBookingForm.controls[controlName].hasError(errorName);
	};

	public onSubmit(): void {
		for (const field in this.recreationBookingForm.controls) {
			console.log(this.recreationBookingForm.controls[field].value);
		}
		this.dialog.open(PopupDialogComponent, {
			data: {
				type: DialogType.BookingConfirmation,
			},
		});
	}
}
