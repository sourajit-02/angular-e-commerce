import { ValidatorFn } from '@angular/forms';
import { NameValue } from './NameValue';

export interface IFormsModel {
  fieldType: 'input' | 'textarea' | 'select' | 'checkbox';
  controller: string;
  validators?: ValidatorFn[];
  value?: any;
  type?: string;
  label?: string;
  placeholder?: string;
  values?:any[];
  hidden?: boolean;
  min?: number;
  max?: number;
  optional?: boolean;
}
