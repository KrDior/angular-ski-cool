import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { NavigationService } from '@core/services/navigation.service';
import { DialogType, PopupDialogComponent } from '@shared/components/popup-dialog/popup-dialog.component';
import { reviewCarouselConfig } from '@shared/configs/carousel.config';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { DEFAULT_BACKGROUND_PATH } from '@shared/constants/images-constants';
import { CarouselConfig } from '@shared/models/main-card.model';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { RoutePath } from 'src/app/app-routing.module';
import { BookingType } from '../booking/booking.component';

export enum BottomContext {
	Home = 'home',
	AboutUs = 'aboutUs',
	OurTeam = 'ourTeam',
	PrivateLesson = 'privateLesson',
	GroupLesson = 'groupLesson',
	Recreation = 'recreation',
	Review = 'review',
	Booking = 'booking',
}

export interface SlideInterface {
	url: string;
	title: string;
}
@Component({
	selector: 'app-nav-slider',
	templateUrl: './nav-slider.component.html',
	styleUrls: ['./nav-slider.component.scss'],
})
export class NavSliderComponent implements OnInit, OnDestroy {
	@Input()
	public isDesktop!: boolean | null;

	@Input()
	public isNavTabVisible!: boolean;

	@Input()
	public isPageNotFound!: boolean;

	@Output()
	public drawerClick: EventEmitter<void> = new EventEmitter();

	public routes: typeof RoutePath = RoutePath;
	public bottomContextTypes: typeof BottomContext = BottomContext;
	public bottomContext!: BottomContext;
	public backgroundImg: string = DEFAULT_BACKGROUND_PATH;
	public slides: SlideInterface[] = [
		{ url: '/assets/img/home/main-background.png', title: 'home' },
		{ url: '/assets/img/team/team-background.png', title: 'team' },
		{ url: '/assets/img/lesson/lesson-background.png', title: 'lesson' },
	];
	public currentIndex: number = 0;
	public timeoutId?: number;
	public resortOption: string[] = ['St. Moritz', 'Kloster', 'Davos', 'Zermatt', 'Verbies'];
	public bookingOption: BookingType[] = Object.values(BookingType);
	public currentResort!: string;
	public currentBooking!: string;
	public carouselConfig!: CarouselConfig;

	private $destroy: Subject<void> = new Subject();
	private subscriptions: Subscription[] = [];

	constructor(
		private broadcaster: BroadcasterService,
		public dialog: MatDialog,
		private navigationService: NavigationService
	) {
		this.broadcaster
			.listen(BroadcastConstant.BottomContextPage)
			.pipe(takeUntil(this.$destroy))
			.subscribe({
				next: (data) => {
					this.bottomContext = (data as any)?.path || BottomContext.Home;
					this.backgroundImg = (data as any)?.imagePath || null;
				},
			});

		this.subscriptions.push(
			this.navigationService.getCurrentBookingType().subscribe((val) => (this.currentBooking = val))
		);

		this.carouselConfig = reviewCarouselConfig;
	}

	public ngOnInit(): void {
		this.currentResort = this.resortOption[0];
		this.currentBooking = this.bookingOption[0];
		this.resetTimer();
	}

	public toggleDrawer(): void {
		this.drawerClick.emit();
	}

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

	public goToPrevious(): void {
		const isFirstSlide = this.currentIndex === 0;
		const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;

		this.resetTimer();
		this.currentIndex = newIndex;
	}

	public resetTimer() {
		if (this.timeoutId) {
			window.clearTimeout(this.timeoutId);
		}
		this.timeoutId = window.setTimeout(() => this.goToNext(), 6000);
	}

	public goToNext(): void {
		const isLastSlide = this.currentIndex === this.slides.length - 1;
		const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

		this.resetTimer();
		this.currentIndex = newIndex;
	}

	public goToSlide(slideIndex: number): void {
		this.resetTimer();
		this.currentIndex = slideIndex;
	}

	public getCurrentSlideUrl() {
		return this.backgroundImg ? `url('${this.backgroundImg}')` : `url('${this.slides[this.currentIndex].url}')`;
	}

	public onResortChange(resort: string): void {
		this.currentResort = resort;
	}

	public onBookingTypeChange(type: string): void {
		this.currentBooking = type;
		this.broadcaster.broadcast(BroadcastConstant.BookingType, type);
	}

	public ngOnDestroy() {
		this.$destroy.next();
		this.$destroy.complete();
		window.clearTimeout(this.timeoutId);
	}
}
