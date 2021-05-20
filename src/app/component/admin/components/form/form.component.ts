import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() parentForm: FormArray;
  @Input() fieldData: any[];
  @Input() submitted: boolean = false;

  constructor() {}

  ngOnInit() {}
}
