import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { DataLoadService } from '@core/services/data-load.service';
import { ourTeamCard_1_Config } from '@shared/configs/home-card-config';
import { PersonCard } from '@shared/configs/person-card.config';
import { BroadcastConstant } from '@shared/constants/broadcast-constants';
import { MainCard } from '@shared/models/main-card.model';
import { Observable, take } from 'rxjs';
import { BottomContext } from '../nav-slider/nav-slider.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-our-team',
	templateUrl: './our-team.component.html',
	styleUrls: ['./our-team.component.scss'],
})
export class OurTeamComponent implements OnInit, OnDestroy {
	public cardConfig1!: MainCard;

	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	public personCardData$!: Observable<PersonCard[]>;
	public dataSource!: MatTableDataSource<PersonCard>;
	public data$!: Observable<any>;

	constructor(
		private broadcaster: BroadcasterService,
		private dataLoadService: DataLoadService,
		private changeDetectorRef: ChangeDetectorRef
	) {
		this.broadcaster.broadcast(BroadcastConstant.BottomContextPage, {
			path: BottomContext.AboutUs,
			imagePath: '/assets/img/team/team-background.png',
		});
		this.cardConfig1 = ourTeamCard_1_Config;
	}

	ngOnInit() {
		this.dataLoadService
			.getInstructorsData()
			.pipe(take(1))
			.subscribe((data) => {
				this.changeDetectorRef.detectChanges();
				this.dataSource = new MatTableDataSource<PersonCard>(data);
				this.dataSource.paginator = this.paginator;
				this.personCardData$ = this.dataSource.connect();
			});
	}

	ngOnDestroy() {
		if (this.dataSource) {
			this.dataSource.disconnect();
		}
	}
}
