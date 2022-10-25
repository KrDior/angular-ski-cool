import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NavTabComponent } from './components/nav-tab/nav-tab.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { NavSliderComponent } from './components/nav-slider/nav-slider.component';

@NgModule({
  declarations: [SidenavMenuComponent, LayoutComponent, NavTabComponent, NavSliderComponent],
  imports: [CommonModule, SharedModule],
  exports: [SidenavMenuComponent, LayoutComponent, NavTabComponent, NavSliderComponent],
})
export class CoreModule {
  /* make sure CoreModule is imported only by the AppModule and noone else */
  constructor(@Optional() @SkipSelf() presentInParent: CoreModule) {
    if (presentInParent) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
