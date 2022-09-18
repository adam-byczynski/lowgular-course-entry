import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create(form).subscribe(_ => this.onButtonClicked(form));
  /*
  appears to be working intendedly when checked for the api https://dummy.restapiexample.com/api/v1/create,
  which doesn't raise errors, when checked with the https://dummy.restapiexample.com/create used in the exercise
  description doesn't show popup window because of some errors: "CORS missing allow origin" and "NS_ERROR_DOM_BAD_URL"
  */
  }

  onButtonClicked(form: CreateEmployeeModel) {
    alert(`User was successfully added to the database. Name: ${form.name}, Age: ${form.age}, Salary: ${form.salary}`);
  }
}
