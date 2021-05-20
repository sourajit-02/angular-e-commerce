import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, AdminLayoutRoutingModule, MatButtonModule],
  declarations: [
    AdminLayoutComponent,
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
  ],
})
export class AdminLayoutModule {}
