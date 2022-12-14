import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { Subject, takeUntil } from 'rxjs';
import { BottomContext } from '../nav-slider/nav-slider.component';

export enum BookingType {
	PrivateLesson = 'Private Lesson',
	GroupLesson = 'Group Lesson',
	IndividualRecreation = 'Individual Recreation',
}
@Component({
	selector: 'app-booking',
	templateUrl: './booking.component.html',
	styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnDestroy {
	public bookingType: BookingType = BookingType.PrivateLesson;
	public bookingTypes: typeof BookingType = BookingType;

	private $destroy: Subject<void> = new Subject();

	constructor(private broadcaster: BroadcasterService) {
		this.broadcaster.broadcast(BroadcastConstant.BottomContextPage, {
			path: BottomContext.Booking,
			imagePath: '/assets/img/lesson/lesson-background.png',
		});

		this.broadcaster
			.listen(BroadcastConstant.BookingType)
			.pipe(takeUntil(this.$destroy))
			.subscribe({
				next: (data) => {
					this.bookingType = data as BookingType;
				},
			});
	}

	public ngOnDestroy() {
		this.$destroy.next();
		this.$destroy.complete();
	}
}
