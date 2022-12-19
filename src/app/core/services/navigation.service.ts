import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { BookingType } from '@core/components/booking/booking.component';

@Injectable({ providedIn: 'root' })
export class NavigationService {
	private linkBreaks: BehaviorSubject<number[]>;
	private linkWidths: BehaviorSubject<number[]>;
	private bookingType: BehaviorSubject<BookingType>;

	constructor() {
		this.linkBreaks = new BehaviorSubject<number[]>([]);
		this.linkWidths = new BehaviorSubject<number[]>([]);
		this.bookingType = new BehaviorSubject<BookingType>(BookingType.PrivateLesson);
	}

	updateLineBreaks(values: number[]): void {
		this.linkBreaks.next(values);
	}

	getLineBreaks(): Observable<number[]> {
		return this.linkBreaks.asObservable();
	}

	updateLinkWidths(values: number[]): void {
		this.linkWidths.next(values);
	}

	getLinkWidths(): Observable<number[]> {
		return this.linkWidths.asObservable();
	}

	setCurrentBookingType(type: BookingType): void {
		this.bookingType.next(type);
	}

	getCurrentBookingType(): Observable<BookingType> {
		return this.bookingType.asObservable();
	}
}
