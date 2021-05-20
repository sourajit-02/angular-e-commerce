import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/admin/services/login.service';

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
  };

  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService
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
      case 'pass-maxlength':
        return 'Password should contain maximum 20 characters';
      default:
        return '';
    }
  }
  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService.loginUser(this.loginForm.value);
    } else {
      console.log('Enter valid information!!');
      this.toastr.warning('Enter valid information!!', 'Warning:', {
        closeButton: true,
      });
    }
  }
}
