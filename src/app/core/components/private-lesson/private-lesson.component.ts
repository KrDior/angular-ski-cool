import { Component } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { privateLesson_Config } from '@shared/configs/home-card-config';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { MainCard } from '@shared/models/main-card.model';
import { BottomContext } from '../nav-slider/nav-slider.component';

@Component({
	selector: 'app-private-lesson',
	templateUrl: './private-lesson.component.html',
	styleUrls: ['./private-lesson.component.scss'],
})
export class PrivateLessonComponent {
	public cardConfig!: MainCard[];

	constructor(private broadcaster: BroadcasterService) {
		this.broadcaster.broadcast(BroadcastConstant.BottomContextPage, {
			path: BottomContext.PrivateLesson,
			imagePath: '',
		});

		this.cardConfig = privateLesson_Config;
	}
}
