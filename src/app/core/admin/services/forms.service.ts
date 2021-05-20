import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormsModel } from '../models/FormsModel';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}

  public vendorFormField: FormsModel[] = [
    {
      fieldType: 'input',
      label: 'Vendor Name',
      type: 'text',
      value: 'value',
      placeholder: 'Vendor Name',
      controller: 'vendor_name',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Vendor Company Name',
      type: 'text',
      value: 'value',
      placeholder: 'Vendor Company Name',
      controller: 'vendor_company_name',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Vendor Email',
      type: 'email',
      value: 'value@test.com',
      placeholder: 'Vendor Email',
      controller: 'vendor_email',
      validators: [Validators.required, Validators.email],
    },
    {
      fieldType: 'input',
      label: 'Vendor Mobile',
      type: 'number',
      value: 0,
      placeholder: 'Vendor Mobile',
      controller: 'vendor_mobile',
      min: 0,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    },
    {
      fieldType: 'textarea',
      label: 'Vendor Address',
      type: 'text',
      value: 'value',
      placeholder: 'Vendor Address',
      controller: 'vendor_address',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Vendor Country',
      type: 'text',
      value: 'value',
      placeholder: 'Vendor Country',
      controller: 'vendor_country',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Vendor City',
      type: 'text',
      value: 'value',
      placeholder: 'Vendor City',
      controller: 'vendor_city',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Vendor Pincode',
      type: 'number',
      value: 0,
      placeholder: 'Vendor Pincode',
      controller: 'vendor_pincode',
      min: 0,
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Vendor State',
      type: 'text',
      value: 'value',
      placeholder: 'Vendor State',
      controller: 'vendor_state',
      validators: [Validators.required],
    },
    {
      fieldType: 'textarea',
      label: 'Vendor Landmark',
      type: 'text',
      value: 'value',
      placeholder: 'Vendor Landmark',
      controller: 'vendor_landmark',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Vendor ID',
      type: 'number',
      value: 0,
      placeholder: 'Vendor ID',
      controller: 'vendor_id',
      hidden: true,
    },
    {
      fieldType: 'input',
      label: 'Created By',
      type: 'text',
      value: 'admin',
      placeholder: 'Created By',
      controller: 'created_by',
      hidden: true,
    },
    {
      fieldType: 'input',
      label: 'Updated By',
      type: 'text',
      value: 'admin',
      placeholder: 'Updated By',
      controller: 'updated_by',
      hidden: true,
    },
  ];

  getFormData(type: string): FormsModel[] {
    switch (type) {
      case 'Vendor':
        return this.vendorFormField;
      default:
        return [];
    }
  }
}
