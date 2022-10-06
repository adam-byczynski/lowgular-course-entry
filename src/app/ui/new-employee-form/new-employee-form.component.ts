import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeDataService} from "../../services/employee-data.service";
import {EmployeeDataModel} from "../../model/employee-data.model";

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewEmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  })

  constructor(private _employeeService: EmployeeDataService) {
  }

  onFormSubmitted(form: EmployeeDataModel) {
    this._employeeService.createNewEmployee(form).subscribe(_ => this.onSubmitButtonClicked(form));
  }

  onSubmitButtonClicked(form: EmployeeDataModel) {
    alert(`User was successfully added to the database. Name: ${form.name}, Age: ${form.age}, Salary: ${form.salary}.`);
  }
}

