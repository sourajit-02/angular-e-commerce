import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faFacebookF,
  faTwitter,
  faPinterestSquare,
  faGooglePlusG,
  faInstagram,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
} from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public faFacebookF = faFacebookF;
  public faTwitter = faTwitter;
  public faPinterestSquare = faPinterestSquare;
  public faGooglePlusG = faGooglePlusG;
  public faInstagram = faInstagram;
  public faCcVisa = faCcVisa;
  public faCcMastercard = faCcMastercard;
  public faCcAmex = faCcAmex;
  public faCcPaypal = faCcPaypal;
  public subscribe: FormGroup;
  public myplaceHolder: string = 'Email Address';

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.subscribe = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  getError(error: string) {
    switch (error) {
      case 'email-required':
        return 'Email required';
      case 'email-invalid':
        return 'Email is not valid';
      case 'first-name':
    }
  }

  checkPlaceHolder() {
    if (this.myplaceHolder) {
      this.myplaceHolder = null;
      return;
    } else {
      this.myplaceHolder = 'Email Address';
      return;
    }
  }

  onSubmit() {
    if (this.subscribe.valid) {
      console.log(this.subscribe.value);
    } else {
      console.log('Enter valid imformation!!');
      this.toastr.warning('Enter valid imformation!!', 'Warning:', {
        closeButton: true,
      });
    }
  }
}
