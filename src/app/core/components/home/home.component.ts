import { Component } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { DEFAULT_BACKGROUND_PATH } from '@shared/constants/images-constants';
import { BottomContext } from '../nav-slider/nav-slider.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(private broadcaster: BroadcasterService) {
		this.broadcaster.broadcast(BroadcastConstant.BottomContextPage, {
			path: BottomContext.Home,
			imagePath: DEFAULT_BACKGROUND_PATH,
		});
	}
}
