import { Component, OnInit } from '@angular/core';
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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  public editBox = {
    button: 'Save',
  };
  public userDetails: UserDetails;

  public editUserForm: FormGroup = this.formBuilder.group({});
  public formFields: IFormsModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  createFormGroup(data: IFormsModel[]): FormGroup {
    let formGroup: FormGroup = this.formBuilder.group({});
    data.forEach((item) => {
      if (item.validators) {
        if (item.value) {
          formGroup.addControl(
            item.controller,
            new FormControl(this.userDetails[item.controller], item.validators)
          );
        } else {
          formGroup.addControl(
            item.controller,
            new FormControl(this.userDetails[item.controller], item.validators)
          );
        }
      } else {
        if (item.value) {
          formGroup.addControl(
            item.controller,
            new FormControl(this.userDetails[item.controller])
          );
        } else {
          formGroup.addControl(
            item.controller,
            new FormControl(this.userDetails[item.controller])
          );
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
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.updateUser(form);
    } else {
      console.log('Enter valid imformation!!');
      this.toastr.warning('Enter valid imformation!!', 'Warning:', {
        closeButton: true,
      });
    }
  }
  updateUser(form: FormGroup) {
    this.userService.editUserDetails(form.value).subscribe(
      (result: any) => {
        console.log(result);
        this.toastr.success(
          `Updating the User Details was Successful!!
           Product Name: ${result.data.user_name}
          `,
          'Success:',
          {
            closeButton: true,
          }
        );
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Updating the User Details was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Updating the User Details was Unsuccessful!!',
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
          console.log(users);
          this.userDetails = users;
          this.formFields = this.userService.getEditUserForm();
          this.editUserForm = this.createFormGroup(this.formFields);
          console.log(this.formFields);
          console.log(this.editUserForm);
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
