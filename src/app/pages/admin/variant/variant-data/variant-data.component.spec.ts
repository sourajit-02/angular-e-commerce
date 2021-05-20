/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VariantDataComponent } from './variant-data.component';

describe('VariantDataComponent', () => {
  let component: VariantDataComponent;
  let fixture: ComponentFixture<VariantDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariantDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
