import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() formFieldData: any;
  @Input() group: FormGroup;
  @Input() form: any;
  public control: AbstractControl;
  constructor() {}

  ngOnInit() {
    this.control = this.group.get(this.formFieldData.controller);
  }
}
