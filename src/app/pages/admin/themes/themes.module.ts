import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { ThemesComponent } from './themes.component';
import { ThemeComponent } from './theme/theme.component';
import { MenuComponent } from './menu/menu.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ThemesRoutingModule,
    MaterialsModule,
  ],
  declarations: [ThemesComponent, ThemeComponent, MenuComponent],
})
export class ThemesModule {}
