import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./component/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./component/admin/admin-layout/admin-layout.module').then(
        (m) => m.AdminLayoutModule
      ),
  },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
