import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
})
export class SidenavMenuComponent {
  @Output() public drawerClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  public toggleDrawer(): void {
    this.drawerClick.emit();
  }
}
