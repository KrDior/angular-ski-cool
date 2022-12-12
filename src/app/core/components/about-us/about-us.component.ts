import { Component } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { aboutUsCard_1_Config } from '@shared/configs/home-card-config';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { MainCard } from '@shared/models/main-card.model';
import { BottomContext } from '../nav-slider/nav-slider.component';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
	public cardConfig1!: MainCard;

	constructor(private broadcaster: BroadcasterService) {
		this.broadcaster.broadcast(BroadcastConstant.BottomContextPage, {
			path: BottomContext.AboutUs,
			imagePath: '',
		});
		this.cardConfig1 = aboutUsCard_1_Config;
	}
}
