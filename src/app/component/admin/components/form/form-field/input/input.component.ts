import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() formFieldData: any;
  @Input() group: FormGroup;
  @Input() submitted: boolean = false;
  public control: AbstractControl;
  constructor() {}

  ngOnInit() {
    this.control = this.group.get(this.formFieldData.controller);
  }
  getError(error: any) {
    switch (error) {
      case 'required':
        return `${this.formFieldData.placeholder} is required`;
      case 'email':
        return `${this.formFieldData.placeholder} is invalid`;
      case 'pattern':
        return `${this.formFieldData.placeholder} is invalid`;
      case 'minlength':
        return `Enter minimum characters in ${this.formFieldData.placeholder}`;
      case 'maxlength':
        return `Exceeding maximum limit of characters in ${this.formFieldData.placeholder}`;
      default:
        return '';
    }
  }
}
