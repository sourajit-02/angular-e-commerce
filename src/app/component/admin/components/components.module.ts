import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { InputComponent } from './form/form-field/input/input.component';
import { FormFieldComponent } from './form/form-field/form-field.component';
import { RadioComponent } from './form/form-field/radio/radio.component';
import { SelectComponent } from './form/form-field/select/select.component';
import { TextareaComponent } from './form/form-field/textarea/textarea.component';
import { CheckboxComponent } from './form/form-field/checkbox/checkbox.component';
import { TableComponent } from './table/table.component';
import { FlexTableComponent } from './table/flex-table/flex-table.component';
import { GridTableComponent } from './table/grid-table/grid-table.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';

@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    FormFieldComponent,
    RadioComponent,
    SelectComponent,
    TextareaComponent,
    CheckboxComponent,
    TableComponent,
    GridTableComponent,
    FlexTableComponent,
    DialogFormComponent,
  ],
  exports: [
    FormComponent,
    InputComponent,
    FormFieldComponent,
    RadioComponent,
    SelectComponent,
    TextareaComponent,
    CheckboxComponent,
    TableComponent,
    GridTableComponent,
    FlexTableComponent,
    DialogFormComponent,
  ],
  imports: [CommonModule, MaterialsModule],
})
export class ComponentsModule {}
