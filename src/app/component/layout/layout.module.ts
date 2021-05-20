import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { BackToTopModule } from '../back-to-top/back-to-top.module';
import { FooterModule } from '../footer/footer.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeModule } from 'src/app/pages/home/home.module';
import { NavbarComponent } from '../head/navbar/navbar.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { CartModule } from '../cart/cart.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopbarComponent } from '../head/topbar/topbar.component';
import { AccountModelModule } from '../account-model/account-model.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BackToTopModule,
    FooterModule,
    HomeModule,
    MaterialsModule,
    CartModule,
    FontAwesomeModule,
    AccountModelModule,
  ],
  declarations: [LayoutComponent, NavbarComponent, TopbarComponent],
})
export class LayoutModule {}
