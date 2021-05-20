import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IFormsModel } from 'src/app/core/models/IFormsModel';
import { UserDetails } from 'src/app/core/models/UserDetails';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-checkout-user-form',
  templateUrl: './checkout-user-form.component.html',
  styleUrls: ['./checkout-user-form.component.scss'],
})
export class CheckoutUserFormComponent
  implements OnInit, AfterViewInit, OnChanges {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}
  public userForm: FormGroup = this.formBuilder.group({});
  public shippingForm: FormGroup = this.formBuilder.group({});
  public newAddress: boolean = false;
  @Input() userDetails: UserDetails;
  @ViewChild('shipping') shipping: any;
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
  ngOnInit() {
    this.userForm = this.createFormGroup(this.userFieldData);
    this.getUser();
    this.validate();
  }
  ngAfterViewInit() {
    this.shippingForm = this.shipping.shippingForm;
  }
  ngOnChanges() {
    this.shippingForm = this.shipping.shippingForm;
  }
  getUser() {
    this.userService.getUserDetails().subscribe(
      (users: UserDetails) => {
        if (users) {
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
      text.classList.add('collapse-area-open');
      this.newAddress = true;
    } else {
      text.classList.remove('collapse-area-open');
      this.newAddress = false;
    }
  }
  validate() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form: any) => {
      form.addEventListener(
        'submit',
        (event: any) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        },
        false
      );
    });
  }
}
