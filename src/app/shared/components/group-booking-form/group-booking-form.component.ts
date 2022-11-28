import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { RoutePath } from 'src/app/app-routing.module';
import { DialogType, PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import {
	DisciplineList,
	instructorsData,
	InstructorsList,
	LanguageList,
	LessonDurationList,
	LessonList,
	ResortList,
} from './group-form.config';

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

	constructor(public dialog: MatDialog, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
		this.iconRegistry.addSvgIcon(
			'help-circle',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/help_circle.svg')
		);
	}

	ngOnInit() {
		this.groupBookingForm = new FormGroup({
			shopName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
			shopAddress: new FormControl('', [Validators.required, Validators.maxLength(200)]),

			firstName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			lastName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			email: new FormControl('', [Validators.required, Validators.maxLength(200)]),
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
			cardName: new FormControl('', [Validators.required, Validators.maxLength(200)]),
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
