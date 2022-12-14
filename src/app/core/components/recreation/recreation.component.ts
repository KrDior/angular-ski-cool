import { Component } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { recreation_Config } from '@shared/configs/home-card-config';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { MainCard } from '@shared/models/main-card.model';
import { BottomContext } from '../nav-slider/nav-slider.component';

@Component({
	selector: 'app-recreation',
	templateUrl: './recreation.component.html',
	styleUrls: ['./recreation.component.scss'],
})
export class RecreationComponent {
	public cardConfig!: MainCard[];

	constructor(private broadcaster: BroadcasterService) {
		this.broadcaster.broadcast(BroadcastConstant.BottomContextPage, {
			path: BottomContext.Recreation,
			imagePath: '',
		});

		this.cardConfig = recreation_Config;
	}
}
