import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigSliderComponent } from './big-slider/big-slider.component';
import { HomeComponent } from './home.component';
import { OfferBannerComponent } from './offer-banner/offer-banner.component';
import { OfferProductsComponent } from './offer-products/offer-products.component';
import { SmallSliderComponent } from './small-slider/small-slider.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'big-slider',
        component: BigSliderComponent,
      },
      {
        path: 'small-slider',
        component: SmallSliderComponent,
      },
      {
        path: 'offer-banner',
        component: OfferBannerComponent,
      },
      {
        path: 'offer-products',
        component: OfferProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
