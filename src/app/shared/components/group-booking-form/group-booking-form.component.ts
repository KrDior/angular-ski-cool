import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
	LanguageList,
	ResortList,
	DisciplineList,
	LessonList,
	LessonDurationList,
	InstructorsList,
	instructorsData,
} from '@shared/configs/form.config';
import { Subscription } from 'rxjs';
import { RoutePath } from 'src/app/app-routing.module';
import { DialogType, PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-group-booking-form',
	templateUrl: './group-booking-form.component.html',
	styleUrls: ['./group-booking-form.component.scss'],
})
export class GroupBookingFormComponent implements OnInit, OnDestroy {
	public messageDetails = 'Your Details';
	public messagePayment = 'Payment';
	public routes: typeof RoutePath = RoutePath;

	public groupBookingForm!: FormGroup;

	public languages = LanguageList;
	public resorts = ResortList;
	public disciplines = DisciplineList;
	public lessons = LessonList;
	public lessonDuration = LessonDurationList;
	public instructors = InstructorsList;
	public paymentValue = 0;
	public termAndConditionChecked = false;

	private instructorsData = instructorsData;
	private onFormChangeSubscription!: Subscription;

	constructor(public dialog: MatDialog) {}

	ngOnInit() {
		this.groupBookingForm = new FormGroup({
			firstName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
			lastName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
			email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			phoneNumber: new FormControl('', [Validators.required]),
			language: new FormControl('', [Validators.required]),
			resort: new FormControl('', [Validators.required]),
			discipline: new FormControl('', [Validators.required]),
			lessonFocus: new FormControl(''),
			startDate: new FormControl('', [Validators.required]),
			endDate: new FormControl('', [Validators.required]),
			childNumber: new FormControl('', [Validators.required]),
			adultNumber: new FormControl('', [Validators.required]),
			lessonDuration: new FormControl('', [Validators.required]),
			instructor: new FormControl(''),
			otherRequirement: new FormControl('', [Validators.maxLength(500)]),

			cardNumber: new FormControl('', [
				Validators.required,
				Validators.pattern(/(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)/),
			]),
			expiration: new FormControl('', [
				Validators.required,
				Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
			]),
			cvv: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]),
			cardName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
		});

		this.onFormChangeSubscription = this.groupBookingForm.valueChanges.subscribe((value) => {
			if (this.groupBookingForm.dirty) {
				//calculate payment
				console.log(value);
				this.paymentValue = 100;
			}
		});
	}

	public checkError = (controlName: string, errorName: string) => {
		return this.groupBookingForm.controls[controlName].hasError(errorName);
	};

	public onSubmit(): void {
		for (const field in this.groupBookingForm.controls) {
			console.log(this.groupBookingForm.controls[field].value);
		}
		this.dialog.open(PopupDialogComponent, {
			data: {
				type: DialogType.BookingConfirmation,
			},
		});
	}

	public showInstructorPopup(instructorName: string): void {
		const chosenInstructorInfo = this.instructorsData.find((instructor) => instructor.name === instructorName);

		chosenInstructorInfo &&
			this.dialog.open(PopupDialogComponent, {
				data: {
					name: chosenInstructorInfo.name,
					title: chosenInstructorInfo.title,
					description: chosenInstructorInfo.description,
					type: DialogType.GroupBooking,
				},
			});
	}

	ngOnDestroy() {
		this.onFormChangeSubscription.unsubscribe();
	}
}
