import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() formFieldData: any;
  @Input() group: FormGroup;
  @Input() form: any;
  public control: AbstractControl;
  constructor() {}

  ngOnInit() {
    this.control = this.group.get(this.formFieldData.controller);
  }
  getErrorList(errorObject: any) {
    return Object.keys(errorObject);
  }
  getError(error: any) {
    switch (error) {
      case 'required':
        return `${this.formFieldData.label} is required`;
      default:
        return '';
    }
  }
}
