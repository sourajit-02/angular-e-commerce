import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackOrderComponent } from './track-order/track-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderComponent } from './order.component';
import { ReturnedOrderComponent } from './returned-order/returned-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: 'view-order/:orderType',
        component: NewOrderComponent,
      },
      {
        path: 'track-order',
        component: TrackOrderComponent,
      },
      {
        path: 'returned-order',
        component: ReturnedOrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
