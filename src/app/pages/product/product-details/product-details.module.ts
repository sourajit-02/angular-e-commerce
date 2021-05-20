import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsRoutingModule } from './product-details-routing.module';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DescriptionComponent } from './product-tabs/description/description.component';
import { SpecificationComponent } from './product-tabs/specification/specification.component';
import { ReviewsComponent } from './product-tabs/reviews/reviews.component';
import { AnalogsComponent } from './product-tabs/analogs/analogs.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-slider';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductCardComponent,
    ProductInfoComponent,
    ProductTabsComponent,
    RelatedProductsComponent,
    DescriptionComponent,
    SpecificationComponent,
    ReviewsComponent,
    AnalogsComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MaterialsModule,
    // CarouselModule,
    NgImageSliderModule,
  ],
})
export class ProductDetailsModule {}
