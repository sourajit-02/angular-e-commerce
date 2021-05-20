import { ValidatorFn } from '@angular/forms';

export interface FormsModel {
  fieldType: 'input' | 'textarea' | 'select' | 'checkbox';
  controller: string;
  validators?: ValidatorFn[];
  value?: any;
  type?: string;
  label?: string;
  placeholder?: string;
  values?: any[];
  hidden?: boolean;
  min?: number;
  max?: number;
  method?:string;
  isDisable?:boolean;
}
