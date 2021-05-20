import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input() fieldData: any;
  @Input() myformGroup: FormGroup;
  @Input() submitted: boolean = false;
  constructor() {}

  ngOnInit() {}
}
