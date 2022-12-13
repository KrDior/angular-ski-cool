import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { DialogType, PopupDialogComponent } from '@shared/components/popup-dialog/popup-dialog.component';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { DEFAULT_BACKGROUND_PATH } from '@shared/constants/images-constants';
import { Subject, takeUntil } from 'rxjs';
import { RoutePath } from 'src/app/app-routing.module';

export enum BottomContext {
	Home = 'home',
	AboutUs = 'aboutUs',
	OurTeam = 'ourTeam',
}
@Component({
	selector: 'app-nav-slider',
	templateUrl: './nav-slider.component.html',
	styleUrls: ['./nav-slider.component.scss'],
})
export class NavSliderComponent implements OnDestroy {
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

	private $destroy: Subject<void> = new Subject();

	constructor(private broadcaster: BroadcasterService, public dialog: MatDialog) {
		this.broadcaster
			.listen(BroadcastConstant.BottomContextPage)
			.pipe(takeUntil(this.$destroy))
			.subscribe({
				next: (data) => {
					this.bottomContext = (data as any)?.path || BottomContext.Home;
					this.backgroundImg = (data as any)?.imagePath || DEFAULT_BACKGROUND_PATH;
				},
			});
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

	ngOnDestroy() {
		this.$destroy.next();
		this.$destroy.complete();
	}
}
