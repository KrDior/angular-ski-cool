import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnDestroy {
	constructor(private broadcaster: BroadcasterService) {
		this.broadcaster.broadcast(BroadcastConstant.IsPageNotFound, true);
	}

	ngOnDestroy() {
		this.broadcaster.broadcast(BroadcastConstant.IsPageNotFound, false);
	}
}
