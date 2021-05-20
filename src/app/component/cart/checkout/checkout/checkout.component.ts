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
import { ICartItem } from 'src/app/core/models/ICartItem';
import { IFormsModel } from 'src/app/core/models/IFormsModel';
import { UserDetails } from 'src/app/core/models/UserDetails';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.loadCartItems();
  }
  public cartItems: ICartItem[] = [];
  public cartTotal = 0;
  public userDetails: UserDetails;
  public userForm: FormGroup = this.formBuilder.group({});
  public newAddress: boolean = false;
  public shippingForm: FormGroup = this.formBuilder.group({});
  public billingData: BillingData;
  public userFieldData: IFormsModel[] = [
    {
      fieldType: 'input',
      label: 'First Name',
      type: 'text',
      placeholder: 'Mark',
      controller: 'user_first_name',
      validators: [Validators.required, Validators.maxLength(255)],
    },
    {
      fieldType: 'input',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Twain',
      controller: 'user_last_name',
      validators: [Validators.required, Validators.maxLength(255)],
    },
    {
      fieldType: 'input',
      label: 'Company Name',
      type: 'text',
      placeholder: 'RedParts corp.',
      controller: 'user_company_name',
      optional: true,
    },
    {
      fieldType: 'select',
      label: 'Country',
      values: [
        { name: 'India', value: 1 },
        { name: 'USA', value: 2 },
        { name: 'Russia', value: 3 },
        { name: 'China', value: 4 },
      ],
      placeholder: 'Country',
      controller: 'country_code',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Street Address',
      type: 'text',
      placeholder: 'House number and street name',
      controller: 'user_address',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      type: 'text',
      placeholder: 'Apartment, suite, unit etc.',
      controller: 'user_address_2',
    },
    {
      fieldType: 'select',
      label: 'City',
      values: [{ name: 'Mumbai', value: 1 }],
      placeholder: 'City',
      controller: 'city_code',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'State',
      type: 'text',
      placeholder: 'Texas',
      controller: 'user_state',
    },
    {
      fieldType: 'input',
      label: 'Postcode',
      type: 'number',
      placeholder: '19720',
      controller: 'user_pin_code',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Email address',
      type: 'email',
      placeholder: 'user@example.com',
      controller: 'user_email',
      validators: [Validators.required, Validators.email],
    },
    {
      fieldType: 'input',
      label: 'Phone Number',
      type: 'number',
      placeholder: '+1 999 888 7777',
      controller: 'user_phone',
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    },
    // {
    //   fieldType: 'textarea',
    //   label: 'Order notes',
    //   controller: 'order_notes',
    // },
  ];
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
    this.userForm = this.createFormGroup(this.userFieldData);
    this.shippingForm = this.createFormGroup(this.shippingFieldData);
    this.getUser();
    this.loadCartItems();
    this.handleSubscription();
  }

  createFormGroup(data: IFormsModel[], userDetails?: UserDetails): FormGroup {
    let formGroup: FormGroup = this.formBuilder.group({});
    data.forEach((item) => {
      if (item.validators) {
        if (userDetails && userDetails[item.controller]) {
          formGroup.addControl(
            item.controller,
            new FormControl(userDetails[item.controller], item.validators)
          );
        } else if (item.values) {
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
        if (userDetails && userDetails[item.controller]) {
          formGroup.addControl(
            item.controller,
            new FormControl(userDetails[item.controller])
          );
        } else if (item.values) {
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
  openNewAddressForm(event: any) {
    let text = document.getElementById('address2');
    if (event.target.checked) {
      text.classList.add('collapse-area--open');
      this.newAddress = true;
    } else {
      text.classList.remove('collapse-area--open');
      this.newAddress = false;
    }
  }

  handleSubscription() {
    this.msg.getMsg().subscribe(
      (result) => {
        this.loadCartItems();
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Failed to connect with your cart!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Failed to connect with your cart!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }

  loadCartItems() {
    this.cartItems = this.cartService.getFromStorage('Cart');
    if (this.cartItems.length === 0) {
      this.cartItems = [];
      this.navigateToHome();
    }
    this.calCartTotal();
  }
  calCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.product_quantity * item.product_price;
    });
  }
  onSubmit(userForm: FormGroup, shippingForm: FormGroup) {
    // console.log(userForm);
    // console.log(shippingForm);
    if (this.newAddress === true) {
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
    } else {
      if (this.userForm.valid) {
        this.billingData = {
          user_detail: this.userForm.value,
          shipping_detail: {
            shipping_address: this.userForm.value['user_address'],
            shipping_city_code: this.userForm.value['city_code'],
            shipping_country_code: this.userForm.value['country_code'],
            shipping_address_2: this.userForm.value['user_address_2'],
            shipping_pin_code: this.userForm.value['user_pin_code'],
          },
          products: this.cartService.getFromStorage('Cart'),
        };
        console.log(this.billingData);
      } else {
        console.log('Enter valid imformation!!');
        this.toastr.warning('Enter valid imformation!!', 'Warning:', {
          closeButton: true,
        });
      }
    }
  }
  navigateToHome() {
    this.router.navigate(['website']).then(
      (response) => {
        console.log('Navigation response: ', response);
        this.toastr.success('Your Cart is empty!!', 'Success:', {
          closeButton: true,
          onActivateTick: true,
        });
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Navigation to Home Page was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Navigation to Home Page was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  getUser() {
    this.userService.getUserDetails().subscribe(
      (users: UserDetails) => {
        if (users) {
          // console.log(users);
          this.userDetails = users;
          this.userForm = this.createFormGroup(
            this.userFieldData,
            this.userDetails
          );
        } else {
          this.userDetails = null;
          this.toastr.warning(
            'Users List is either empty or undefined or null. All the Users are not loaded !!',
            'Warning:',
            {
              closeButton: true,
            }
          );
        }
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Loading User List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading User List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
}
