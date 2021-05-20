import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.scss']
})
export class NewAddressComponent implements OnInit {

  public addBox = {
    fname: 'First Name',
    lname: 'Last Name',
    cname: 'Company Name',
    country: 'Country',
    street: 'Street',
    city: 'City',
    state: 'State',
    postcode: 'Postcode',
    email: 'Email address',
    phone: 'Phone Number',
    button: 'Save'
  }

  addressForm: FormGroup;

  constructor( 
    private formBuilder: FormBuilder ) {
  }

  ngOnInit(): void {
    this.addForm();
  }

  addForm() {
    this.addressForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postcode: ['', [Validators.required]]
    })
  }

  get func() {
    return this.addressForm.controls;
  }

  getError(el) {
    switch(el) {
      case 'email':
        if (this.addressForm.get('email').hasError('required')) {
          return 'Required field.';
        } else if (this.addressForm.get('email').hasError('email')) {
          return 'Email is not valid';
        }
        break;
        case 'fname':
          if (this.addressForm.get('fname').hasError('required')) {
            return 'Required field.';
          }
          break; 
      case 'lname':
        if (this.addressForm.get('lname').hasError('required')) {
          return 'Required field.';
        }
        break; 
      case 'postcode':
        if (this.addressForm.get('postcode').hasError('required')) {
          return 'Required field.';
        }
        break; 
      case 'street':
          if (this.addressForm.get('street').hasError('required')) {
            return 'Required field.';
          }
          break; 
      case 'city':
            if (this.addressForm.get('city').hasError('required')) {
              return 'Required field.';
            }
            break;
      case 'phone':
        if (this.addressForm.get('lname').hasError('required')) {
          return 'Required field.';
        }
        break;
      default:
        return '';
    }
  }
}

