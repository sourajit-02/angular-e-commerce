import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
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
