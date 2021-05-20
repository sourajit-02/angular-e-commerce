import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IFormsModel } from 'src/app/core/models/IFormsModel';
import { UserDetails } from 'src/app/core/models/UserDetails';

@Component({
  selector: 'app-checkout-shipping-form',
  templateUrl: './checkout-shipping-form.component.html',
  styleUrls: ['./checkout-shipping-form.component.scss'],
})
export class CheckoutShippingFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  public shippingForm: FormGroup = this.formBuilder.group({});
  public shippingFieldData: IFormsModel[] = [
    {
      fieldType: 'input',
      label: 'First Name',
      type: 'text',
      placeholder: 'Mark',
      controller: 'shipping_first_name',
      validators: [Validators.required, Validators.maxLength(255)],
    },
    {
      fieldType: 'input',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Twain',
      controller: 'shipping_last_name',
      validators: [Validators.required, Validators.maxLength(255)],
    },
    {
      fieldType: 'input',
      label: 'Company Name',
      type: 'text',
      placeholder: 'RedParts corp.',
      controller: 'shipping_company_name',
      optional: true,
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
      fieldType: 'input',
      label: 'Shipping Street Address',
      type: 'text',
      placeholder: 'House number and street name',
      controller: 'shipping_address',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      type: 'text',
      placeholder: 'Apartment, suite, unit etc.',
      controller: 'shipping_address_2',
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
      label: 'Postcode',
      type: 'number',
      placeholder: '19720',
      controller: 'shipping_pin_code',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Email address',
      type: 'email',
      placeholder: 'user@example.com',
      controller: 'shipping_email',
      validators: [Validators.required, Validators.email],
    },
    {
      fieldType: 'input',
      label: 'Phone Number',
      type: 'number',
      placeholder: '+1 999 888 7777',
      controller: 'shipping_phone',
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    },
  ];
  ngOnInit() {
    this.shippingForm = this.createFormGroup(this.shippingFieldData);
  }
  createFormGroup(data: IFormsModel[]): FormGroup {
    let formGroup: FormGroup = this.formBuilder.group({});
    data.forEach((item) => {
      if (item.validators) {
        if (item.values) {
          formGroup.addControl(
            item.controller,
            new FormControl(item.values, item.validators)
          );
        } else if (item.value) {
          formGroup.addControl(
            item.controller,
            new FormControl(item.value, item.validators)
          );
        } else {
          formGroup.addControl(
            item.controller,
            new FormControl('', item.validators)
          );
        }
      } else {
        if (item.values) {
          formGroup.addControl(item.controller, new FormControl(item.values));
        } else if (item.value) {
          formGroup.addControl(item.controller, new FormControl(item.value));
        } else {
          formGroup.addControl(item.controller, new FormControl(''));
        }
      }
    });
    return formGroup;
  }
}
