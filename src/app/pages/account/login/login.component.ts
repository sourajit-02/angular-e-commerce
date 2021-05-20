import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginBox = {
    mainHeading: 'Login',
    emailLabel: 'Enter your email',
    passLabel: 'Enter your password',
    forgrotPass: 'Forgot your password?',
    buttonName: 'Login',
    color: 'primary',
  };

  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  getError(error: string) {
    switch (error) {
      case 'email-required':
        return 'Email required';
      case 'email-invalid':
        return 'Email is not valid';
      case 'pass-required':
        return 'Password required';
      case 'pass-minlength':
        return 'Password should contain maximum 20 characters';
      default:
        return '';
    }
  }
  onLogin() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value);
    } else {
      console.log('Enter valid information!!');
      this.toastr.warning('Enter valid information!!', 'Warning:', {
        closeButton: true,
      });
    }
  }
}
