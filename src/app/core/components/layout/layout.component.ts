import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public isShowHideFlag: 'over' | 'push' | 'side' = 'over';

  @ViewChild('drawer', { static: true })
  public drawerContainer!: MatDrawer;

  constructor() {}

  public onDrawerClick(): void {
    this.drawerContainer.toggle();
  }
}
