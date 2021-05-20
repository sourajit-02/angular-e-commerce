import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemesComponent } from './themes.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesComponent,
    children: [
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'theme',
        component: ThemeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule {}
