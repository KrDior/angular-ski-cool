import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationList } from '@shared/models/localization-list';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
	$destroy: Subject<void> = new Subject();

	constructor(public translateService: TranslateService, private broadcaster: BroadcasterService) {
		// this.translateService.addLangs(Object.values(LocalizationList));
		// this.translateService.setDefaultLang(LocalizationList.EN);

		// const browserLang = this.translateService.getBrowserLang();

		// this.translateService.use(browserLang ? browserLang : LocalizationList.EN);

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

	ngOnDestroy() {
		this.$destroy.next();
		this.$destroy.complete();
	}
}
