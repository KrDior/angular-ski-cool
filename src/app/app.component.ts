import { fromEvent, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil, throttleTime } from 'rxjs/operators';

import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationList } from '@shared/models/localization-list';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuItem } from '@core/models/menu-item.model';
import { menuItemsConfig } from '@shared/configs/menu-items.config';
import { RoutePath } from './app-routing.module';
import { MOBILE_LAND_WIDTH } from '@shared/constants/common-constants';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	public isShowHideFlag: 'over' | 'push' | 'side' = 'over';
	public menuItems: MenuItem[] = menuItemsConfig;
	public routes: typeof RoutePath = RoutePath;
	public isDesktopView$!: Observable<boolean>;
	public localizationList: LocalizationList[] = Object.values(LocalizationList);
	public currentLang!: string;
	public availableLang!: LocalizationList[];

	@ViewChild('drawer', { static: true })
	public drawerContainer!: MatDrawer;

	private $destroy: Subject<void> = new Subject();

	constructor(
		public translateService: TranslateService,
		private broadcaster: BroadcasterService,
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer
	) {
		this.iconRegistry.addSvgIcon(
			'booking',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/long_up_right.svg')
		);

		this.setLocalizationList();

		// app component broadasting
		this.broadcaster.broadcast('mykey', 'myvalue');
		//set dummy token just to enable auth guard for after-login module
		localStorage.setItem('token', 'dummy');

		/**
		 * do this in other page, for e.g I'm doing here only
		 * use this service with takeUntil from rxJS and local Subject to prevent memory leaks like shown
		 */
		this.broadcaster
			.listen('mykey')
			.pipe(takeUntil(this.$destroy))
			.subscribe({
				next: (data) => console.log(data), // your broadcasted value
			});
	}

	ngOnInit() {
		const checkScreenSize = () => document.body.offsetWidth > MOBILE_LAND_WIDTH;

		const isDesktopView$ = fromEvent(window, 'resize').pipe(throttleTime(200), map(checkScreenSize));

		// Start off with the initial value use the isScreenSmall$ | async in the
		// view to get both the original value and the new value after resize.
		this.isDesktopView$ = isDesktopView$.pipe(startWith(checkScreenSize()));
	}

	public onDrawerClick(): void {
		this.drawerContainer.toggle();
	}

	public onLanguageChange(lang: string): void {
		this.translateService.use(lang);

		this.setLocalizationList();
	}

	private setLocalizationList(): void {
		this.currentLang = this.translateService.currentLang ?? LocalizationList.EN;

		this.availableLang = this.localizationList.filter((lang) => lang !== this.currentLang);
	}

	ngOnDestroy() {
		this.$destroy.next();
		this.$destroy.complete();
	}
}
