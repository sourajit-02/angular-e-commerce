import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  public pwdBox = {
    title1: 'Current Password',
    title2: 'New Password',
    title3: 'Repeat Password',
    button: 'Change'
  }

  pwdForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.passwordForm();
  }

  passwordForm() {
    this.pwdForm = this.formBuilder.group({
      title1: ['', Validators.required],
      title2: ['', Validators.required],
      title3: ['', Validators.required],
    })
  }

  get func() {
    return this.pwdForm.controls;
  }

  getError (el) {
    switch(el) {
      case 'title1':
          if (this.pwdForm.get('title1').hasError('required')) {
            return 'Required field.';
          }
          break;
      case 'title2':
        if (this.pwdForm.get('title2').hasError('required')) {
          return 'Required field.';
        }
        break;
      case 'title3':
        if (this.pwdForm.get('title3').hasError('required')) {
          return 'Required field.';
        }
        break;
    }
  }
}
