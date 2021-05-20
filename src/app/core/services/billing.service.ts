import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { IFormsModel } from '../models/IFormsModel';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  constructor(private app: AppService) {}
  public userFieldData: IFormsModel[] = [
    {
      fieldType: 'input',
      label: 'First Name',
      type: 'text',
      value: 'value',
      placeholder: 'First Name',
      controller: 'first_name',
      validators: [Validators.required, Validators.maxLength(255)],
    },
    {
      fieldType: 'input',
      label: 'Last Name',
      type: 'text',
      value: 'value',
      placeholder: 'Last Name',
      controller: 'last_name',
      validators: [Validators.required, Validators.maxLength(255)],
    },
    {
      fieldType: 'input',
      label: 'Phone/Mobile',
      type: 'number',
      placeholder: 'Phone/Mobile',
      controller: 'phone',
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    },
    {
      fieldType: 'input',
      label: 'Email',
      type: 'email',
      value: 'value@test',
      placeholder: 'Email',
      controller: 'email',
      validators: [Validators.required, Validators.email],
    },
    {
      fieldType: 'textarea',
      label: 'User Address Line 1',
      type: 'text',
      value: 'value',
      placeholder: 'User Address',
      controller: 'user_address',
      validators: [Validators.required],
    },
    {
      fieldType: 'textarea',
      label: 'Address Line 2',
      type: 'text',
      value: 'value',
      placeholder: 'User Address',
      controller: 'user_address_2',
      validators: [Validators.required],
    },
    {
      fieldType: 'select',
      label: 'Country',
      values: [{ name: 'Maharashtra', value: 1 }],
      placeholder: 'Country',
      controller: 'country',
      validators: [Validators.required],
    },
    {
      fieldType: 'select',
      label: 'City',
      values: [{ name: 'Mumbai', value: 1 }],
      placeholder: 'City',
      controller: 'city',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Pin Code',
      type: 'number',
      value: 50,
      min: 0,
      placeholder: 'Pin Code',
      controller: 'pin_code',
      validators: [Validators.required],
    },
  ];
  public shippingFieldData: IFormsModel[] = [
    {
      fieldType: 'textarea',
      label: 'Shipping Address Line 1',
      type: 'text',
      value: 'value',
      placeholder: 'Shipping Address',
      controller: 'shipping_address',
      validators: [Validators.required],
    },
    {
      fieldType: 'textarea',
      label: 'Address Line 2',
      type: 'text',
      value: 'value',
      placeholder: 'Shipping Address',
      controller: 'shipping_address_2',
      validators: [Validators.required],
    },
    {
      fieldType: 'select',
      label: 'Country',
      values: [{ name: 'Maharashtra', value: 1 }],
      placeholder: 'Country',
      controller: 'shipping_country',
      validators: [Validators.required],
    },
    {
      fieldType: 'select',
      label: 'City',
      values: [{ name: 'Mumbai', value: 1 }],
      placeholder: 'City',
      controller: 'shipping_city',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Pin Code',
      type: 'number',
      value: 50,
      min: 0,
      placeholder: 'Pin Code',
      controller: 'shipping_pin_code',
      validators: [Validators.required],
    },
  ];
  getBillingForm(key: string) {
    switch (key) {
      case 'user':
        return this.userFieldData;
      case 'shipping':
        return this.shippingFieldData;
    }
  }
}
