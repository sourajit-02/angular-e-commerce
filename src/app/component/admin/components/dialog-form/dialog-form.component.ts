import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModel } from 'src/app/core/admin/models/FormsModel';
import { FormsService } from 'src/app/core/admin/services/forms.service';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss'],
})
export class DialogFormComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    private forms: FormsService,
    public dialogRef: MatDialogRef<DialogFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formData = { ...data };
    this.formData.action = data.action;
    this.formData.type = data.type;
    this.formData.formField = data.formField;
    
  }
  public dialogForm: FormArray = this.fb.array([]);
  public formFieldData: FormsModel[] = [];
  public formData: any;
  public submitted: boolean = false;
  public title: string;
  ngOnInit() {
    this.getFormData();
    if (this.formData.action === 'Delete') {
      Object.keys(this.formData.value).forEach((item) => {
        if (item.includes('name')) {
          this.title = item;
        }
      });
    }
  }
  doAction() {
    this.submitted = true;
    if (this.formData.action !== 'Delete') {
      this.formData.value = this.dialogForm.getRawValue();
      if (this.dialogForm.valid === true) {
        this.dialogRef.close({
          event: this.formData.action,
          data: this.formData.value,
        });
      } else {
        console.log('Form is not valid!');
      }
    } else {
      this.dialogRef.close({
        event: this.formData.action,
        data: this.formData.value,
      });
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  getFormData() {
    this.formFieldData = this.formData.formField;
    // this.formFieldData = this.forms.getFormData(this.formData.type);
    this.dialogForm = this.createFormArray(this.formFieldData);
  }
  createFormArray(data: FormsModel[]): FormArray {
    let formArray: FormArray = this.fb.array([]);
    let formGroup: FormGroup = this.fb.group({});
    if (this.formData.action === 'Add') {
      data.forEach((item) => {
        if (item.validators) {
          if (item.value) {
            if (item?.type === 'number') {
              formGroup.addControl(
                item.controller,
                new FormControl(parseInt(item.value), item.validators)
              );
            } else {
              formGroup.addControl(
                item.controller,
                new FormControl(item.value, item.validators)
              );
            }
          } else if (item.values) {
            formGroup.addControl(
              item.controller,
              new FormControl(item.values, item.validators)
            );
          } else {
            formGroup.addControl(
              item.controller,
              new FormControl('', item.validators)
            );
          }
        } else {
          if (item.value) {
            formGroup.addControl(item.controller, new FormControl(item.value));
          } else if (item.values) {
            formGroup.addControl(item.controller, new FormControl(item.values));
          } else {
            formGroup.addControl(item.controller, new FormControl(''));
          }
        }
      });
    } else if (this.formData.action === 'Edit') {
      data.forEach((item) => {

        if (item.validators) {
          formGroup.addControl(
            item.controller,
            new FormControl(
              this.formData.value[item.controller],
              item.validators
            )
          );
        } else {
          if(item.method === 'edit' || item.method === 'all'){
            formGroup.addControl(
              item.controller,
              new FormControl({value:this.formData.value[item.controller],disabled: item.isDisable?item.isDisable:false})
            );
          }
     
        }
      });
    }
    formArray.push(formGroup);
    return formArray;
  }
}
