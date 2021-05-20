import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModelComponent } from './account-model.component';
import { AccountModelRoutingModule } from './account-model-routing.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  imports: [CommonModule, AccountModelRoutingModule, OverlayPanelModule],
  declarations: [AccountModelComponent],
  exports: [AccountModelComponent],
})
export class AccountModelModule {}
