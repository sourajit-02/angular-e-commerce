import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
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
      default:
        return '';
    }
  }
}
