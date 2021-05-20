import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopRoutingModule } from './back-to-top-routing.module';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, BackToTopRoutingModule, FontAwesomeModule],
  exports: [BackToTopComponent],
  declarations: [BackToTopComponent],
})
export class BackToTopModule {}
