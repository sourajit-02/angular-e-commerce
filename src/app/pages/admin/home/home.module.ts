import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { BigSliderComponent } from './big-slider/big-slider.component';
import { SmallSliderComponent } from './small-slider/small-slider.component';
import { OfferBannerComponent } from './offer-banner/offer-banner.component';
import { OfferProductsComponent } from './offer-products/offer-products.component';

@NgModule({
  imports: [CommonModule, ComponentsModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    BigSliderComponent,
    SmallSliderComponent,
    OfferBannerComponent,
    OfferProductsComponent,
  ],
})
export class HomeModule {}
