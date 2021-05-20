import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IFormsModel } from 'src/app/core/models/IFormsModel';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public fieldData: IFormsModel[] = [
    {
      fieldType: 'input',
      label: 'First Name',
      type: 'text',
      value: 'value',
      placeholder: 'First Name',
      controller: 'user_first_name',
      validators: [Validators.required, Validators.maxLength(255)],
    },
    {
      fieldType: 'input',
      label: 'Last Name',
      type: 'text',
      value: 'value',
      placeholder: 'Last Name',
      controller: 'user_last_name',
      validators: [Validators.required, Validators.maxLength(255)],
    },
    {
      fieldType: 'input',
      label: 'Phone/Mobile',
      type: 'number',
      value: 8888888888,
      min: 0,
      placeholder: 'Phone/Mobile',
      controller: 'user_phone',
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
      controller: 'user_email',
      validators: [Validators.required, Validators.email],
    },
    {
      fieldType: 'input',
      label: 'Password',
      type: 'password',
      value: 'value',
      placeholder: 'Password',
      controller: 'password',
      validators: [Validators.required, Validators.maxLength(20)],
    },
    {
      fieldType: 'input',
      label: 'Confirm Password',
      type: 'password',
      value: 'value',
      placeholder: 'Confirm Password',
      controller: 'confirm_password',
      validators: [],
    },
    {
      fieldType: 'textarea',
      label: 'User Address',
      type: 'text',
      value: 'value',
      placeholder: 'User Address',
      controller: 'user_address',
      validators: [Validators.required],
    },
    {
      fieldType: 'select',
      label: 'Country Code',
      values: [{ name: 'Maharashtra', value: 1 }],
      placeholder: 'Country Code',
      controller: 'country_code',
      validators: [Validators.required],
    },
    {
      fieldType: 'select',
      label: 'City Code',
      values: [{ name: 'Mumbai', value: 1 }],
      placeholder: 'City Code',
      controller: 'city_code',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'User Pin Code',
      type: 'number',
      value: 50,
      min: 0,
      placeholder: 'User Pin Code',
      controller: 'user_pin_code',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Created By',
      type: 'text',
      hidden: true,
      value: 'admin',
      placeholder: 'Created By',
      controller: 'created_by',
    },
    {
      fieldType: 'input',
      label: 'Updated By',
      type: 'text',
      hidden: true,
      value: 'admin',
      placeholder: 'Updated By',
      controller: 'updated_by',
    },
  ];
  public registerForm: FormGroup = this.formBuilder.group({});
  public user: User;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.createFormGroup(this.fieldData);
    console.log('Register FormGroup: ');
    console.log(this.registerForm);
  }
  createFormGroup(data: IFormsModel[]): FormGroup {
    let formGroup: FormGroup = this.formBuilder.group({});
    data.forEach((item) => {
      if (item.validators) {
        if (item.values) {
          formGroup.addControl(
            item.controller,
            new FormControl('', item.validators)
          );
        } else {
          if (item.controller === 'confirm_password') {
            formGroup.addControl(
              item.controller,
              new FormControl(item.value, [
                Validators.compose([this.validateAreEqual.bind(this)]),
              ])
            );
          } else {
            formGroup.addControl(
              item.controller,
              new FormControl(item.value, item.validators)
            );
          }
        }
      } else {
        if (item.values) {
          formGroup.addControl(item.controller, new FormControl(''));
        } else {
          formGroup.addControl(item.controller, new FormControl(item.value));
        }
      }
    });
    console.log(formGroup);
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

  onRegister() {
    console.log(this.registerForm.value);
    this.userRegistration();
  }

  userRegistration() {
    console.log("userRegistration");
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      console.log(this.user);
      this.userService.registerUser(this.user).subscribe(
        (result) => {
          console.log(
            'Registration successfull\nNow login to access your profile!!'
          );
          this.toastr.success(
            'Registration successfull\nNow login to access your profile!!',
            'Success:',
            {
              closeButton: true,
            }
          );
          setTimeout(() => {
            this.router.navigate(['account/login']).then(
              (response) => {
                console.log('Navigation response: ', response);
                this.toastr.success(
                  'Navigation to Login Page was successfull!!',
                  'Success:',
                  {
                    closeButton: true,
                    onActivateTick: true,
                  }
                );
              },
              (error) => {
                console.log(error);
                if (error.message) {
                  this.toastr.error(
                    `${error.message}`,
                    'Navigation to Login Page was Unsuccessful!!',
                    {
                      closeButton: true,
                    }
                  );
                } else {
                  this.toastr.error(
                    `${error}`,
                    'Navigation to Login Page was Unsuccessful!!',
                    {
                      closeButton: true,
                    }
                  );
                }
              }
            );
          }, 2500);
        },
        (error) => {
          console.log(error);
          if (error.message) {
            this.toastr.error(
              `${error.message}`,
              'Registration not successful!!',
              {
                closeButton: true,
              }
            );
          } else {
            this.toastr.error(`${error}`, 'Registration not successful!!', {
              closeButton: true,
            });
          }
        }
      );
    } else {
      console.log('Enter valid information!!');
      this.toastr.warning('Enter valid information!!', 'Warning:', {
        closeButton: true,
      });
    }
  }
  private validateAreEqual(fieldControl: FormControl) {
    if (this.registerForm.get('password')) {
      return fieldControl.value === this.registerForm.get('password').value
        ? null
        : {
            notmatched: true,
          };
    }
  }
  // checkDuplicate(user: User) {
  //   this.authService.checkExistingUser(user).subscribe(
  //     (userExists) => {
  //       if (!userExists) {
  //         this.userRegistration();
  //       } else {
  //         console.log('User already exists!!');
  //         this.toastr.warning('User already exists!!', 'Warning:');
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.message) {
  //         this.toastr.error(
  //           `${error.message}`,
  //           'Error: Checking user not successful!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       } else {
  //         this.toastr.error(
  //           `${error}`,
  //           'Error: Checking user not successful!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       }
  //     }
  //   );
  // }
}
