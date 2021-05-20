import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutService } from './core/services/about.service';
import { AuthService } from './core/services/auth.service';
import { CartService } from './core/services/cart.service';
import { BillingService } from './core/services/billing.service';
import { MessengerService } from './core/services/messenger.service';
import { OrderDetailService } from './core/services/order-detail.service';
import { OrderHistoryService } from './core/services/order-history.service';
import { ProductService } from './core/services/product.service';
import { UserService } from './core/services/user.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeService } from './core/services/home.service';
import { ToastrModule } from 'ngx-toastr';
import { AppService } from './core/services/app.service';
import { CheckoutService } from './core/services/checkout.service';
import { AuthInterceptor } from './core/interceptors/auth-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
    NgbModule,
  ],
  providers: [
    AboutService,
    AppService,
    AuthService,
    CartService,
    CheckoutService,
    BillingService,
    HomeService,
    MessengerService,
    OrderDetailService,
    OrderHistoryService,
    ProductService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
