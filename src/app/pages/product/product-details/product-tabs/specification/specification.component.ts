import { Component, OnInit } from '@angular/core';
import { NameValue } from 'src/app/core/models/NameValue';

const GENERAL_SPEC: NameValue[] = [
  { name: 'Speed', value: '750 RPM' },
  { name: 'Power Source', value: 'Cordless-Electric' },
  { name: 'Voltage', value: '20 Volts' },
  { name: 'Battery Capacity', value: '2 Ah' },
  { name: 'Material', value: 'Aluminium, Plastic' },
  { name: 'Engine Type', value: 'Brushless' },
];
const DIMENSION_SPEC: NameValue[] = [
  { name: 'Length', value: '99 mm' },
  { name: 'Width', value: '207 mm' },
  { name: 'Height', value: '208 mm' },
];
@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss'],
})
export class SpecificationComponent implements OnInit {
  public generalSpec = GENERAL_SPEC;
  public dimensionSpec = DIMENSION_SPEC;
  constructor() {}

  ngOnInit(): void {}
}
