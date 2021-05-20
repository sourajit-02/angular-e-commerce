import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillingData } from 'src/app/core/models/BillingData';
import { IFormsModel } from 'src/app/core/models/IFormsModel';
import { NameValue } from 'src/app/core/models/NameValue';
import { BillingService } from 'src/app/core/services/billing.service';
import { CartService } from 'src/app/core/services/cart.service';
import { CheckoutService } from 'src/app/core/services/checkout.service';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
})
export class BillingInfoComponent implements OnInit {
  public userForm: FormGroup = this.formBuilder.group({});
  public shippingForm: FormGroup = this.formBuilder.group({});
  public userFieldData: IFormsModel[] = [];
  public shippingFieldData: IFormsModel[] = [];
  public formFields: Array<IFormsModel[]> = [];
  public countryList: NameValue[];
  public stateList: NameValue[];
  public selectedCountry: string;
  public selectedState: string;
  public billingData: BillingData;

  constructor(
    private formBuilder: FormBuilder,
    private checkoutService: CheckoutService,
    private router: Router,
    private cartService: CartService,
    private bill: BillingService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.setForm();
    this.confForm();
  }
  confForm() {
    this.userFieldData = this.bill.getBillingForm('user');
    this.formFields.push(this.userFieldData);
    this.shippingFieldData = this.bill.getBillingForm('shipping');
    this.formFields.push(this.shippingFieldData);
    this.userForm = this.createFormGroup(this.userFieldData);
    this.shippingForm = this.createFormGroup(this.shippingFieldData);
  }
  createFormGroup(data: IFormsModel[]): FormGroup {
    let formGroup: FormGroup = this.formBuilder.group({});
    data.forEach((item) => {
      if (item.validators) {
        if (item.value) {
          formGroup.addControl(
            item.controller,
            new FormControl(item.value, item.validators)
          );
        } else if (item.values) {
          formGroup.addControl(
            item.controller,
            new FormControl(item.values, item.validators)
          );
        } else {
          formGroup.addControl(
            item.controller,
            new FormControl('', item.validators)
          );
        }
      } else {
        if (item.value) {
          formGroup.addControl(item.controller, new FormControl(item.value));
        } else if (item.values) {
          formGroup.addControl(item.controller, new FormControl(item.values));
        } else {
          formGroup.addControl(item.controller, new FormControl(''));
        }
      }
    });
    return formGroup;
  }

  getError(error: string, data?: IFormsModel) {
    switch (error) {
      case 'required':
        return `${data.placeholder} is required`;
      case 'email':
        return `${data.placeholder} is invalid`;
      case 'pattern':
        return `${data.placeholder} is invalid`;
      case 'minlength':
        return `Enter minimum characters in ${data.placeholder}`;
      case 'maxlength':
        return `Exceeding maximum limit of characters in ${data.placeholder}`;
      case 'notmatched':
        return `Passwords do not match`;
      default:
        return '';
    }
  }

  onSubmit(userForm: FormGroup, shippingForm: FormGroup) {
    console.log(userForm);
    console.log(shippingForm);
    if (this.userForm.valid && this.shippingForm.valid) {
      this.billingData = {
        user_detail: this.userForm.value,
        shipping_detail: this.shippingForm.value,
        products: this.cartService.getFromStorage('Cart'),
      };
      console.log(this.billingData);
    } else {
      console.log('Enter valid imformation!!');
      this.toastr.warning('Enter valid imformation!!', 'Warning:', {
        closeButton: true,
      });
    }
    // if (this.billingForm.valid) {
    //   this.storeBillingData();
    // } else {
    //   console.log('Enter valid imformation!!');
    //   this.toastr.warning('Enter valid imformation!!', 'Warning:', {
    //     closeButton: true,
    //   });
    // }
  }

  storeBillingData() {
    // console.log(this.billingForm);
    // this.billingData.user_detail = this.billingForm.value;
    // this.billingData.shipping_detail.shipping_address = 'Address';
    // this.billingData.products = this.cartService.getFromStorage('Cart');
    // this.checkoutService.storeBillingData(this.billingData).subscribe(
    //   (result) => {
    //     console.log('Checkout successfull!! Response: ', result);
    //     this.toastr.success('Checkout successfull!!', 'Success:', {
    //       closeButton: true,
    //     });
    //     setTimeout(() => {
    //       this.router.navigate(['website/orders']).then(
    //         (response) => {
    //           console.log('Navigation response: ', response);
    //           this.toastr.success(
    //             'Navigation to Orders Page was successfull!!',
    //             'Success:',
    //             {
    //               closeButton: true,
    //               onActivateTick: true,
    //             }
    //           );
    //         },
    //         (error) => {
    //           console.log(error);
    //           if (error.message) {
    //             this.toastr.error(
    //               `${error.message}`,
    //               'Error: Navigation to Orders Page was Unsuccessful!!',
    //               {
    //                 closeButton: true,
    //               }
    //             );
    //           } else {
    //             this.toastr.error(
    //               `${error}`,
    //               'Error: Navigation to Orders Page was Unsuccessful!!',
    //               {
    //                 closeButton: true,
    //               }
    //             );
    //           }
    //         }
    //       );
    //     }, 3000);
    //   },
    //   (error) => {
    //     console.log(error);
    //     if (error.message) {
    //       this.toastr.error(
    //         `${error.message}`,
    //         'Error: Checkout Unsuccessfull!!',
    //         {
    //           closeButton: true,
    //         }
    //       );
    //     } else {
    //       this.toastr.error(`${error}`, 'Error: Checkout Unsuccessfull!!', {
    //         closeButton: true,
    //       });
    //     }
    //   }
    // );
  }
  // setForm(){
  //   this.createForm();
  //   this.getCountry();
  //   this.getState();
  //   this.validateDynamically();
  // }
  // createForm() {
  //   this.billingForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     first_name: [
  //       '',
  //       [Validators.required, Validators.pattern(`[^ ][a-zA-Z,' \.\-]{2,49}`)],
  //     ],
  //     last_name: [
  //       '',
  //       [Validators.required, Validators.pattern(`[^ ][a-zA-Z,' \.\-]{2,49}`)],
  //     ],
  //     address: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.pattern(`[^ ][a-zA-Z ,'"()0-9\.\/\-]{2,299}`),
  //       ],
  //     ],
  //     address2: ['', Validators.pattern(`[^ ][a-zA-Z ,'"()0-9]{2,299}`)],
  //     city: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.pattern(`[^ ][a-zA-Z ,'"-()0-9\.\/\-]{2,99}`),
  //       ],
  //     ],
  //     country: ['india', Validators.required],
  //     state: [''],
  //     pin_code: ['', Validators.pattern(`[^ ][0-9]{0,14}`)],
  //     phone: [
  //       '',
  //       [Validators.required, Validators.pattern(`[^ ][0-9()\+\-]{9}`)],
  //     ],
  //   });
  // }

  // getCountry() {
  //   this.countryList = this.checkoutService.getAllCountries();
  //   this.selectedCountry = 'india';
  // }

  // getState() {
  //   this.stateList = this.checkoutService.getStateList();
  //   this.selectedState = 'state';
  // }

  // validateDynamically() {
  //   this.checkCountry();
  //   this.validateFields();
  // }

  // checkCountry() {
  //   this.billingForm.get('country').valueChanges.subscribe(
  //     (value) => {
  //       if (value) {
  //         this.selectedCountry = value;
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.message) {
  //         this.toastr.error(
  //           `${error.message}`,
  //           'Error: Could not track selected value!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       } else {
  //         this.toastr.error(
  //           `${error}`,
  //           'Error: Could not track selected value!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       }
  //     }
  //   );
  // }

  // validateFields() {
  //   if (this.selectedCountry === 'india') {
  //     this.billingForm.get('state').setValidators(Validators.required);
  //     this.billingForm.get('zipCode').setValidators(Validators.required);
  //   } else if (
  //     this.selectedCountry === 'pakistan' ||
  //     this.selectedCountry === 'ukraine' ||
  //     this.selectedCountry === 'taiwan'
  //   ) {
  //     this.billingForm.get('state').clearValidators();
  //     this.billingForm.get('zipCode').setValidators(Validators.required);
  //   } else {
  //     this.billingForm.get('state').clearValidators();
  //     this.billingForm.get('zipCode').clearValidators();
  //   }
  // }

  // getError(error: string) {
  //   switch (error) {
  //     case 'email-required':
  //       return 'Email required';
  //     case 'email-invalid':
  //       return 'Email is not valid';
  //     case 'first-name':
  //       return 'First Name required';
  //     case 'first-name-invalid':
  //       return 'Enter valid characters(min-3 max-50) in First Name';
  //     case 'last-name':
  //       return 'Last Name required';
  //     case 'last-name-invalid':
  //       return 'Enter valid characters(min-3 max-50) in Last Name';
  //     case 'address':
  //       return 'Address required';
  //     case 'address-inavlid':
  //       return 'Enter valid characters(min-3 max-300) in Address';
  //     case 'address2':
  //       return 'Enter valid characters(min-3 max-300) in Optional Address';
  //     case 'city':
  //       return 'City required';
  //     case 'city-invalid':
  //       return 'Enter valid characters(min-3 max-100) in City';
  //     case 'country':
  //       return 'Country required';
  //     case 'state':
  //       return 'State required';
  //     case 'zip-code':
  //       return 'Pin code required';
  //     case 'zip-code-invalid':
  //       return 'Enter blank or numbers(max-15)';
  //     case 'phone-required':
  //       return 'Phone required';
  //     case 'phone-invalid':
  //       return 'Enter a valid phone number minimum of 10 numbers';
  //     default:
  //       return '';
  //   }
  // }
}
