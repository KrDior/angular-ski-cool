import { Component } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { groupLesson_Config } from '@shared/configs/home-card-config';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { MainCard } from '@shared/models/main-card.model';
import { BottomContext } from '../nav-slider/nav-slider.component';

@Component({
	selector: 'app-group-lesson',
	templateUrl: './group-lesson.component.html',
	styleUrls: ['./group-lesson.component.scss'],
})
export class GroupLessonComponent {
	public cardConfig!: MainCard[];

	constructor(private broadcaster: BroadcasterService) {
		this.broadcaster.broadcast(BroadcastConstant.BottomContextPage, {
			path: BottomContext.GroupLesson,
			imagePath: '',
		});

		this.cardConfig = groupLesson_Config;
	}
}
